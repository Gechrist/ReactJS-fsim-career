import { PrismaClient } from '@prisma/client';
// @ts-ignore
import { errorHandler } from '../authorization-service/middleware/errorMiddleware.ts';
// @ts-ignore
import { notFoundHandler } from '../authorization-service/middleware/notFoundMiddleware.ts';
// @ts-ignore
import { validateAccessToken } from '../authorization-service/middleware/auth0Middleware.ts';
import { object, string, pattern, assert, number, nullable } from 'superstruct';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import nocache from 'nocache';
import lodash from 'lodash';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const PORT = process.env.VITE_DISPATCH_SERVICE_PORT;
const CLIENT_ORIGIN_URL = process.env.VITE_CLIENT_ORIGIN_URL;

const app = express();
const apiRouter = express.Router();

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

app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 86400,
  })
);

app.use('/api/dispatch', apiRouter);

app.use(errorHandler);
app.use(notFoundHandler);

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

const getFlights = async (
  dep: string,
  minLeg: number,
  maxLeg: number,
  aircraft: string,
  company: string
) => {
  let legFlights: Array<any>;
  legFlights = await prisma.routes.findMany({
    where: {
      icaoDep: dep,
      distance: {
        lt: maxLeg,
        gt: minLeg,
      },
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

  if (legFlights.length > 0) {
    const randomLeg =
      legFlights[Math.floor(Math.random() * legFlights.length) as number];
    return { randomLeg };
  } else {
    return { randomLeg: null };
  }
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
      }
    } catch (e) {
      (e: Error) => console.log('Error:', e.message);
      res.send(e.message);
    } finally {
      prisma.$disconnect();
    }
  }
);

apiRouter.post('/generatedispatch', validateAccessToken, async (req, res) => {
  let terminate: boolean = false;
  const legNumber: number = parseInt(req.body.legNumber);
  const base: string = req.body.careerBase;
  const aircraft: string = req.body.careerAircraft;
  const company: string = req.body.careerCompany;
  const minLeg: number = parseInt(req.body.minLeg) ?? 1;
  const maxLeg: number = parseInt(req.body.maxLeg) ?? 10000;

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
        let { randomLeg } = await getFlights(
          base,
          minLeg,
          maxLeg,
          aircraft,
          company
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
        let { randomLeg } = await getFlights(
          flights[i - 1].icaoArr,
          minLeg,
          maxLeg,
          aircraft,
          company
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

    // reverse order of flights to return to base
    returningFlights = lodash.cloneDeep(flights);
    returningFlights.reverse().forEach((element) => {
      [element['icaoDep'], element['icaoArr']] = [
        element['icaoArr'],
        element['icaoDep'],
      ];
      [
        element['depLat'],
        element['depLong'],
        element['arrLat'],
        element['arrLong'],
      ] = [
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
      let randomNumber: string =
        randomisedNumber[Math.floor(Math.random() * 10)];

      while (randomNumber === element.flightNo[element.flightNo.length]) {
        randomNumber = randomisedNumber[Math.floor(Math.random() * 10)];
      }

      element.flightNo =
        element.flightNo.substring(0, element.flightNo.length - 1) +
        randomNumber;
    });

    returningFlights[returningFlights.length];
    flights = flights.concat(returningFlights);
    res.status(200).send(flights);
  } catch (e) {
    (e: Error) => console.log('Error:', e.message);
    if (e.failures()) {
      validationDispatchFunction(e.failures());
      res.send(errorMessages);
    } else {
      res.send({ message: e.message });
    }
  } finally {
    await prisma.$disconnect();
  }
});

app.listen(PORT, () =>
  console.log(`Dispatch-service listening on port ${PORT}`)
);
