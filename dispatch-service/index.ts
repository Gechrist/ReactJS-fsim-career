import { PrismaClient } from '@prisma/client';
//@ts-ignore
import { errorHandler } from '../authorization-service/middleware/errorMiddleware.ts';
//@ts-ignore
import { notFoundHandler } from '../authorization-service/middleware/notFoundMiddleware.ts';
//@ts-ignore
import { validateAccessToken } from '../authorization-service/middleware/auth0Middleware.ts';
import { object, string, pattern, assert, number, nullable } from 'superstruct';
import cors from 'cors';
import express from 'express';
import ViteExpress from 'vite-express';
import helmet from 'helmet';
import nocache from 'nocache';
import lodash from 'lodash';
import * as dotenv from 'dotenv';

dotenv.config();

//connect to local db
// const prisma = new PrismaClient({
//   datasources: { db: { url: process.env.ROUTES_DATABASE_URL } },
// });

const prisma = new PrismaClient();

const PORT = parseInt(process.env.VITE_DISPATCH_SERVICE_PORT as string, 10);
const CLIENT_ORIGIN_URL = process.env.VITE_CLIENT_ORIGIN_URL;

const app = express();
const apiRouter = express.Router();

app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Methods',
      'Access-Control-Request-Headers',
    ],
    credentials: true,
  })
);

app.use(express.json());
app.set('json spaces', 2);

app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        'default-src': ["'none'"],
        'frame-ancestors': ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    frameguard: {
      action: 'deny',
    },
  })
);

app.use((req, res, next) => {
  res.contentType('application/json; charset=utf-8');
  next();
});
app.use(nocache());

app.use('/api/dispatch', apiRouter);

app.use(errorHandler);
app.use(notFoundHandler);

type Flight = {
  depTime: string;
  icaoDep: string;
  icaoArr: string;
  flightNo: string;
  depLat: number;
  depLong: number;
  arrLat: number;
  arrLong: number;
};

let flights: Array<any> = [];
let returningFlights: Array<any> = [];
let randomisedNumber: Array<string> = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
let errorMessages: {
  base?: string;
  aircraft?: string;
  company?: string;
  minLeg?: string;
  maxLeg?: string;
} = {};

const randomizeFlights = (array: Flight[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const generateReturningFlights = (flights: Flight[]) => {
  // reverse order of flights to return to base
  returningFlights = lodash.cloneDeep(flights);
  returningFlights.reverse().forEach((element) => {
    [
      element['icaoDep'],
      element['icaoArr'],
      element['depLat'],
      element['depLong'],
      element['arrLat'],
      element['arrLong'],
    ] = [
      element['icaoArr'],
      element['icaoDep'],
      element['arrLat'],
      element['arrLong'],
      element['depLat'],
      element['depLong'],
    ];

    // randomize return dep time
    let randomTime: string = randomTimeFunction();
    while (randomTime === element.depTime) {
      randomTime = randomTimeFunction();
    }
    element.depTime = randomTime;

    // randomize return flight no
    let randomNumber: string = randomisedNumber[Math.floor(Math.random() * 10)];

    while (randomNumber === element.flightNo[element.flightNo.length]) {
      randomNumber = randomisedNumber[Math.floor(Math.random() * 10)];
    }

    element.flightNo =
      element.flightNo.substring(0, element.flightNo.length - 1) + randomNumber;
  });

  return returningFlights;
};

// validate dispatch data
const dispatchDataValidation = object({
  base: pattern(string(), /^[A-Z0-9]{3,4}$/),
  aircraft: nullable(string()),
  company: nullable(string()),
  minLeg: number(),
  maxLeg: number(),
});

const validationDispatchFunction = (failures: any) => {
  for (const failure of failures) {
    switch (failure.key) {
      case 'aircraft': {
        errorMessages.aircraft = 'Your aircraft type is missing';
        break;
      }
      case 'base': {
        errorMessages.base = 'Your base is missing';
        break;
      }
      case 'company': {
        errorMessages.company = 'Your company is missing';
        break;
      }
      case 'minLeg': {
        errorMessages.minLeg = 'The Min Leg field is required';
        break;
      }
      case 'maxLeg': {
        errorMessages.maxLeg = 'The Max Leg field is required';
        break;
      }
      default:
        break;
    }
  }
};

//randomise return leg time of dep

const randomTimeFunction = () => {
  let hrs = Math.round(Math.random() * 24);
  let mins = Math.round(Math.random() * 60);
  var hFormat = hrs < 10 ? '0' : '';
  var mFormat = mins < 10 ? '0' : '';

  return String(hFormat + hrs + ':' + mFormat + mins);
};

const getRoutes = async (
  dep: string,
  minLeg: number,
  maxLeg: number,
  aircraft: string,
  company: string,
  arr: string | null,
  returnOneLeg: boolean
) => {
  let flightLegs = await prisma.routes.findMany({
    where: {
      icaoDep: dep,
      distance: {
        lt: maxLeg,
        gt: minLeg,
      },
      ...(arr && { icaoArr: arr }),
      ...(aircraft && { aircraft: { contains: aircraft } }),
      ...(company && { company: { contains: company } }),
    },
    select: {
      depTime: true,
      icaoDep: true,
      icaoArr: true,
      flightNo: true,
      depLat: true,
      depLong: true,
      arrLat: true,
      arrLong: true,
    },
  });

  if (flightLegs.length > 0 && returnOneLeg) {
    const randomLeg =
      flightLegs[Math.floor(Math.random() * flightLegs.length) as number];
    return randomLeg as Flight;
  } else if (flightLegs.length > 0 && !returnOneLeg) {
    return flightLegs as Flight[];
  }
  let randomLeg: any = undefined;
  return randomLeg;
};

apiRouter.get(
  '/getcareeroptionsdata',
  validateAccessToken,
  async (req, res) => {
    try {
      const aircraftData = await prisma.routes.findMany({
        select: { aircraft: true },
        distinct: ['aircraft'],
        orderBy: { aircraft: 'asc' },
      });
      const companyData = await prisma.routes.findMany({
        select: { company: true },
        distinct: ['company'],
        orderBy: { company: 'asc' },
      });
      if (aircraftData && companyData) {
        res.status(200).send({ aircraftData, companyData });
      } else {
        res.status(500).send({ error: 'Internal Server Error' });
      }
    } catch (e) {
      (e: Error) => console.log('Error:', e.message);
      res.send(e.message);
    }
  }
);

apiRouter.get('/generatedispatch', validateAccessToken, async (req, res) => {
  let terminate: boolean = false;
  const legNumber: number = parseInt(req.query.legNumber as string);
  const base: string = req.query.careerBase as string;
  const aircraft: string = req.query.careerAircraft as string;
  const company: string = req.query.careerCompany as string;
  const minLeg: number = parseInt(req.query.minLeg as string) ?? 1;
  const maxLeg: number = parseInt(req.query.maxLeg as string) ?? 10000;

  // reset flights
  flights = [];
  returningFlights = [];
  errorMessages = {};

  const dispatchData: any = {
    base,
    aircraft,
    company,
    minLeg,
    maxLeg,
  };

  try {
    assert(dispatchData, dispatchDataValidation);
    for (let i: number = 0; i < legNumber; i++) {
      if (i === 0) {
        let randomLeg: Flight = await getRoutes(
          base,
          minLeg,
          maxLeg,
          aircraft,
          company,
          null,
          true
        );
        if (!randomLeg) {
          res.status(200).send({
            message: 'Please check your settings and try again',
          });
          terminate = true;
          break;
        } else {
          // remove airline code from flight number
          randomLeg.flightNo = randomLeg.flightNo.substring(
            3,
            randomLeg.flightNo.length
          );
          flights.push(randomLeg);
        }
      } else {
        let randomLeg: Flight = await getRoutes(
          flights[i - 1].icaoArr,
          minLeg,
          maxLeg,
          aircraft,
          company,
          null,
          true
        );

        if (!randomLeg) {
          res.status(200).send({
            message: 'Please check your settings and try again',
          });
          terminate = true;
          break;
        } else {
          // remove airline code from flight number
          randomLeg.flightNo = randomLeg.flightNo.substring(
            3,
            randomLeg.flightNo.length
          );
          flights.push(randomLeg);
        }
      }
    }
    //terminate function if necessary
    if (terminate) {
      return;
    }

    // generate return legs if necessary
    if (flights[0].icaoDep !== flights[flights.length - 1].icaoArr) {
      let numOutgoingFlights = flights.length;

      let returningLeg = await getRoutes(
        flights[flights.length - 1].icaoArr,
        minLeg,
        maxLeg,
        aircraft,
        company,
        flights[0].icaoDep,
        true
      );
      if (returningLeg) {
        // remove airline code from flight number
        returningLeg.flightNo = returningLeg.flightNo.substring(
          3,
          returningLeg.flightNo.length
        );
        flights.push(returningLeg);
      } else {
        let outboundFromLast: Flight[] = await getRoutes(
          flights[flights.length - 1].icaoArr,
          minLeg,
          maxLeg,
          aircraft,
          company,
          null,
          false
        );
        if (outboundFromLast.length > 0) {
          outboundFromLast = randomizeFlights(outboundFromLast);
          let flight: any;
          for (flight of outboundFromLast) {
            let returnToStart = await getRoutes(
              flight.icaoArr,
              minLeg,
              maxLeg,
              aircraft,
              company,
              flights[0].icaoDep,
              true
            );
            if (returnToStart) {
              // remove airline code from flight number
              flight.flightNo = flight.flightNo.substring(
                3,
                flight.flightNo.length
              );
              returnToStart.flightNo = returnToStart.flightNo.substring(
                3,
                returnToStart.flightNo.length
              );
              flights = flights.concat(flight, returnToStart);
              break;
            }
          }
        }
        if (numOutgoingFlights === flights.length) {
          flights = flights.concat(generateReturningFlights(flights));
        }
      }
    }
    res.status(200).send(flights);
  } catch (e) {
    (e: Error) => console.log('Error:', e.message);
    if (e.failures()) {
      validationDispatchFunction(e.failures());
      res.send(errorMessages);
    } else {
      res.send({ message: e.message });
    }
  }
});

ViteExpress.config({ mode: 'production' });

ViteExpress.listen(app, PORT, () => {
  console.log(`Dispatch-service listening on port ${PORT}`);
});
