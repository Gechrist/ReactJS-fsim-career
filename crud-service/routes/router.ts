// @ts-ignore
import { validateAccessToken } from '../../authorization-service/middleware/auth0Middleware.ts';
import { PrismaClient, Rank, CareerType, Prisma, Entry } from '@prisma/client';
import {
  object,
  number,
  string,
  assert,
  pattern,
  enums,
  min,
  size,
  optional,
  boolean,
} from 'superstruct';
import { createPaginator, PaginatedResult } from 'prisma-pagination';
import express from 'express';

const prisma = new PrismaClient();
const paginate = createPaginator({ perPage: 10 });

interface IPaginatedEntry extends PaginatedResult<Entry> {
  owner: string;
  rank: string;
  tTof: number;
  tFlights: number;
  tDayLandings: number;
  tNightLandings: number;
}

export interface IErrorMessage {
  aircraftRange?: string;
  aircraftType?: string;
  aircraftTailNumber?: string;
  base?: string;
  careerType?: string;
  company?: string;
  date?: string;
  landing?: string;
  departure?: string;
  destination?: string;
  flightHours?: string;
  name?: string;
  rank?: string;
  tof?: string;
  soHours?: string;
  foHours?: string;
  cptHours?: string;
  scptHours?: string;
}

const CareerValidation = object({
  id: optional(size(string(), 24)),
  name: size(string(), 1, 20),
  base: pattern(string(), /^[A-Z0-9]{3,4}$/),
  rank: enums([
    'PILOTCADET',
    'SECONDOFFICER',
    'FIRSTOFFICER',
    'CAPTAIN',
    'SENIORCAPTAIN',
  ]),
  flightHours: min(number(), 0),
  aircraft: size(string(), 1, 20),
  company: size(string(), 1, 20),
  careerType: enums(['AIRLINE', 'CARGO', 'CORPORATE']),
});

const EditedCareerValidation = object({
  careerId: size(string(), 36),
  name: size(string(), 1, 20),
  base: pattern(string(), /^[A-Z0-9]{3,4}$/),
  rank: enums([
    'PILOTCADET',
    'SECONDOFFICER',
    'FIRSTOFFICER',
    'CAPTAIN',
    'SENIORCAPTAIN',
  ]),
  flightHours: min(number(), 0),
  aircraft: size(string(), 1, 20),
  company: size(string(), 1, 20),
  careerType: enums(['AIRLINE', 'CARGO', 'CORPORATE']),
});

const PromotionValidation = object({
  careerId: size(string(), 36),
  rank: enums([
    'PILOTCADET',
    'SECONDOFFICER',
    'FIRSTOFFICER',
    'CAPTAIN',
    'SENIORCAPTAIN',
  ]),
});

const userSettingsValidation = object({
  userId: size(string(), 1, 36),
  darkMode: boolean(),
  autAdvance: boolean(),
  soHours: optional(min(number(), 0)),
  foHours: optional(min(number(), 0)),
  cptHours: optional(min(number(), 0)),
  scptHours: optional(min(number(), 0)),
});

const LogbookEntryValidation = object({
  logbookId: size(string(), 1, 36),
  date: size(string(), 1, 30),
  aircraftType: size(string(), 1, 20),
  aircraftTailNumber: size(string(), 1, 10),
  departure: size(string(), 1, 20),
  destination: size(string(), 1, 20),
  tof: min(number(), 0.1),
  landing: size(string(), 1, 5),
});

const EditedLogbookEntryValidation = object({
  entryId: size(string(), 1, 36),
  date: optional(size(string(), 1, 30)),
  aircraftType: optional(size(string(), 1, 20)),
  aircraftTailNumber: optional(size(string(), 1, 10)),
  departure: optional(size(string(), 1, 20)),
  destination: optional(size(string(), 1, 20)),
  tof: optional(min(number(), 0.1)),
  landing: optional(size(string(), 1, 5)),
});

let errorMessages: IErrorMessage = {};

const validationMessagesFunction = (failures: any, forFlightHours?: string) => {
  for (const failure of failures) {
    switch (failure.key) {
      case 'name': {
        errorMessages.name = 'The Pilot field is required';
        break;
      }
      case 'base': {
        if (failure.refinement === 'size') {
          errorMessages.base = 'The Base field is required';
        } else {
          errorMessages.base =
            'The Base field is not a valid ICAO/IATA/FAA code';
        }
        break;
      }
      case 'date': {
        errorMessages.date = 'The Date field is required';
        break;
      }
      case 'aircraftTailNumber': {
        errorMessages.aircraftTailNumber =
          'The Aircraft Tail Number field is required';
        break;
      }
      case 'destination': {
        errorMessages.destination = 'An arrival airport is required';
        break;
      }
      case 'departure': {
        errorMessages.departure = 'A departure airport  is required';
        break;
      }
      case 'tof': {
        errorMessages.tof =
          'The Time of Flight field must have a positive numeric value';
        break;
      }
      case 'landing': {
        errorMessages.landing = 'Either Day or Night Landing has to be checked';
        break;
      }
      case 'careerType': {
        errorMessages.careerType = 'The Career Type field is required';
        break;
      }
      case 'company': {
        errorMessages.company = 'The Company field is required';
        break;
      }
      case 'rank': {
        errorMessages.rank = 'The Rank field is required';

        break;
      }
      case 'flightHours': {
        errorMessages.flightHours =
          'The Flight Hours field must have a positive numeric value';
        break;
      }
      case 'soHours': {
        errorMessages.soHours =
          'The Second Officer Hours field must have a positive numeric value';
        break;
      }
      case 'foHours': {
        errorMessages.soHours =
          'The First Officer Hours field must have a positive numeric value';
        break;
      }
      case 'cptHours': {
        errorMessages.cptHours =
          'The Captain Hours field must have a positive numeric value';
        break;
      }
      case 'scptHours': {
        errorMessages.scptHours =
          'The Senior Captain Hours field must have a positive numeric value';
        break;
      }
      case 'aircraftType': {
        errorMessages.aircraftType = 'The Aircraft Type field is required';
        break;
      }
      default:
        break;
    }
  }
};

export const Router = express.Router();

Router.post('/getuser', validateAccessToken, async (req, res) => {
  const id: string = req.body.data.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(200).send({ message: 'No such user' });
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    res.status(500).send({ message: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/createuser', validateAccessToken, async (req, res) => {
  const id: string = req.body.data.id;
  try {
    const user = await prisma.user.create({ data: { id: id } });
    if (user) {
      res.status(200).send(user);
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    res.status(500).send({ message: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/getcareer', validateAccessToken, async (req, res) => {
  const careerId: string = req.body.careerId;
  try {
    const career = await prisma.career.findUnique({
      where: { id: careerId },
      include: {
        dispatches: true,
      },
    });
    if (career) {
      res.status(200).send(career);
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    res.send({ message: e.message });
  } finally {
    await prisma.$disconnect();
  }
});
Router.post('/getcareers', validateAccessToken, async (req, res) => {
  const userId: string = req.body.id;
  try {
    const careers = await prisma.career.findMany({
      where: { userId: userId },
      include: {
        dispatches: true,
        logbook: true,
      },
    });
    if (careers) {
      res.status(200).send(careers);
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    res.send({ message: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/setusersettings', validateAccessToken, async (req, res) => {
  const userId: string = req.body.id;
  const darkMode: boolean = req.body.darkmode == 'on' ? true : false;
  const autAdvance: boolean = req.body.advancement == 'on' ? true : false;
  const soHours: number = req.body.sohours && parseInt(req.body.sohours);
  const foHours: number = req.body.fohours && parseInt(req.body.fohours);
  const cptHours: number = req.body.cpthours && parseInt(req.body.cpthours);
  const scptHours: number = req.body.scptHours && parseInt(req.body.scptHours);

  errorMessages = {};

  const userSettingsData: any = {
    userId,
    darkMode,
    autAdvance,
    soHours,
    foHours,
    cptHours,
    scptHours,
  };

  try {
    assert(userSettingsData, userSettingsValidation);
    const updateSettings = autAdvance
      ? await prisma.user.update({
          where: { id: userId },
          data: {
            darkMode: darkMode,
            autAdvance: autAdvance,
            autAdvanceData: {
              secOfficer: soHours,
              firOfficer: foHours,
              cpt: cptHours,
              srCaptain: scptHours,
            },
          },
        })
      : await prisma.user.update({
          where: { id: userId },
          data: {
            darkMode: darkMode,
            autAdvance: autAdvance,
          },
        });
    if (updateSettings) {
      res.status(200).send({ message: 'Settings updated succesfully' });
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    if (e.failures()) {
      validationMessagesFunction(e.failures());
      res.send(errorMessages);
    } else {
      res.send(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/createcareer', validateAccessToken, async (req, res) => {
  const id: string = req.body.id;
  const name: string = req.body.name;
  const base: string = req.body.base.toUpperCase();
  const rank: Rank = req.body.rank;
  let flightHours: number = parseFloat(req.body.flightHours);
  if (typeof flightHours == undefined) {
    flightHours = -1;
  }
  const company: string = req.body.company;
  const careerType: CareerType = req.body.careerType;
  const aircraft: string = req.body.aircraftType;
  errorMessages = {};

  const careerData: any = {
    id,
    name,
    base,
    company,
    rank,
    careerType,
    flightHours,
    aircraft,
  };

  try {
    assert(careerData, CareerValidation);
    const createUserCareer = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        careers: {
          create: {
            name: name,
            base: base,
            flightHours: flightHours,
            rank: rank,
            company: company,
            careerType: careerType,
            dispatches: { create: {} },
            aircraft: aircraft,
            logbook: { create: {} },
          },
        },
      },
    });
    if (createUserCareer) {
      res.status(200).send({ message: 'Career created succesfully' });
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    if (e.failures()) {
      validationMessagesFunction(e.failures(), 'check flight hours decimals');
      res.send(errorMessages);
    } else {
      res.send(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/updatecareer', validateAccessToken, async (req, res) => {
  const careerId: string = req.body.careerId;
  const name: string = req.body.name;
  const base: string = req.body.base.toUpperCase();
  const rank: Rank = req.body.rank;
  let flightHours: number = parseFloat(req.body.flightHours);
  if (typeof flightHours == undefined) {
    flightHours = -1;
  }
  const company: string = req.body.company;
  const careerType: CareerType = req.body.careerType;
  const aircraft: string = req.body.aircraftType;

  errorMessages = {};

  const careerData: any = {
    careerId,
    name,
    base,
    flightHours,
    company,
    rank,
    careerType,
    aircraft,
  };

  try {
    assert(careerData, EditedCareerValidation);
    const updateUserCareer = await prisma.career.update({
      where: {
        id: careerId,
      },
      data: {
        name: name as string,
        base: base as string,
        rank: rank,
        flightHours: flightHours,
        company: company as string,
        careerType: careerType as CareerType,
        aircraft: aircraft,
      },
    });

    if (updateUserCareer) {
      res.status(200).send({ message: 'Career updated succesfully' });
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    if (e.failures()) {
      validationMessagesFunction(e.failures());
      res.send(errorMessages);
    } else {
      res.send(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/promoteuser', validateAccessToken, async (req, res) => {
  const careerId: string = req.body.careerId;
  const rank: Rank = req.body.rank;

  const promotionData: any = {
    careerId,
    rank,
  };

  try {
    assert(promotionData, PromotionValidation);
    const updateUserCareer = await prisma.career.update({
      where: {
        id: careerId,
      },
      data: {
        rank: rank,
      },
    });
    if (updateUserCareer) {
      res.status(200).send({
        promoMessage: `You have been promoted to ${
          rank == 'PILOTCADET'
            ? 'Pilot Cadet'
            : rank == 'SECONDOFFICER'
            ? 'Second Officer'
            : rank == 'FIRSTOFFICER'
            ? 'First Officer'
            : rank == 'CAPTAIN'
            ? 'Captain'
            : 'Senior Captain'
        }!`,
      });
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    res.send(e.message);
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/deletecareer', validateAccessToken, async (req, res) => {
  const careerId: string = req.body.data.careerId;
  try {
    const deleteCareer = await prisma.career.delete({
      where: { id: careerId },
    });
    if (deleteCareer) {
      res.status(200).send({ message: 'Career deleted succesfully' });
    }
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    res.send({ message: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/getlogbook', validateAccessToken, async (req, res) => {
  const logbookId: string = req.body?.logbookId;
  const pageNumber: number = req.body?.pageNumber;
  const perPageNumber: number = req.body?.perPageNumber;
  const searchField: string | null = req.body?.searchField;
  const careerId: string = req.body?.careerId;

  const searchEntryArg: any = searchField
    ? {
        where: {
          logbookId: logbookId,
          OR: [
            {
              data: {
                path: ['date'],
                string_contains: searchField,
                mode: 'insensitive',
              },
            },
            {
              data: {
                path: ['tof'],
                equals: parseFloat(searchField),
              },
            },
            {
              data: {
                path: ['landing'],
                string_contains: searchField,
                mode: 'insensitive',
              },
            },
            {
              data: {
                path: ['departure'],
                string_contains: searchField,
                mode: 'insensitive',
              },
            },
            {
              data: {
                path: ['destination'],
                string_contains: searchField,
                mode: 'insensitive',
              },
            },
            {
              data: {
                path: ['aircraftType'],
                string_contains: searchField,
                mode: 'insensitive',
              },
            },
            {
              data: {
                path: ['aircraftTailNumber'],
                string_contains: searchField,
                mode: 'insensitive',
              },
            },
          ],
        },
        orderBy: { createdAt: 'desc' },
      }
    : { where: { logbookId: logbookId }, orderBy: { createdAt: 'desc' } };
  try {
    const [logbookTotFlights, logbookTotDayland, logbookTotNightland, career] =
      await prisma.$transaction([
        prisma.entry.count({
          where: { logbookId: logbookId },
        }),
        prisma.entry.count({
          where: {
            logbookId: logbookId,
            data: { path: ['landing'], equals: 'day' },
          },
        }),
        prisma.entry.count({
          where: {
            logbookId: logbookId,
            data: { path: ['landing'], equals: 'night' },
          },
        }),
        prisma.career.findUnique({
          where: { id: careerId },
        }),
      ]);

    const logbook: IPaginatedEntry = (await paginate<
      Entry,
      Prisma.EntryFindManyArgs
    >(prisma.entry, searchEntryArg, {
      page: pageNumber,
      perPage: perPageNumber,
    })) as IPaginatedEntry;
    if (logbook) {
      logbook.owner = career!.name;
      logbook.rank = career!.rank;
      logbook.tTof = career!.flightHours as number;
      logbook.tFlights = logbookTotFlights;
      logbook.tDayLandings = logbookTotDayland;
      logbook.tNightLandings = logbookTotNightland;

      res.status(200).send(logbook);
    } else {
      res.status(200).send({ message: 'No such logbook' });
    }
  } catch (e) {
    (e: Error) => console.log('Error:', e.message);
    res.send({ message: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/getdispatch', validateAccessToken, async (req, res) => {
  const careerId = req.body.careerId;
  try {
    const getDispatchData = await prisma.dispatch.findUnique({
      where: { careerId: careerId },
    });
    if (getDispatchData) {
      res.status(200).send(getDispatchData?.data);
    } else {
      res.status(200).send({ message: 'No dispatch data available' });
    }
  } catch (e) {
    (e: Error) => console.log(e.message);
    res.send({ error: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/savedispatch', validateAccessToken, async (req, res) => {
  const careerId = req.body.careerId;
  const dispatchData = req.body.dispatchData as Prisma.JsonArray;
  try {
    const saveDispatchData = await prisma.dispatch.update({
      where: { careerId: careerId },
      data: { data: [...dispatchData] },
    });
    if (saveDispatchData) {
      res.status(200).send({ message: 'Dispatch data saved succesfully' });
    }
  } catch (e) {
    (e: Error) => console.log(e.message);
    res.send({ error: e.message });
  } finally {
    await prisma.$disconnect();
  }
});

Router.post('/createlogbookentry', validateAccessToken, async (req, res) => {
  const reqData = JSON.parse(req.body.data);
  const logbookId: string = req.body.logbookId;
  const date: string = reqData.date;
  const aircraftType: string = reqData.aircraftType;
  const aircraftTailNumber: string = reqData.aircraftTailNumber;
  const departure: string = reqData.departure;
  const destination: string = reqData.destination;
  let tof: number = parseFloat(reqData.tof);
  if (typeof tof == undefined) {
    tof = -1;
  }
  const landing: string = reqData.landing;
  const careerId: string = req.body?.careerId;

  errorMessages = {};

  const logbookEntryData: any = {
    logbookId,
    date,
    aircraftType,
    aircraftTailNumber,
    departure,
    destination,
    tof,
    landing,
  };

  try {
    await prisma.$transaction(async (tx) => {
      assert(logbookEntryData, LogbookEntryValidation);
      const updateUserLogbook = await prisma.logbook.update({
        where: {
          id: logbookId,
        },
        data: {
          entries: {
            create: {
              data: {
                date,
                aircraftType,
                aircraftTailNumber,
                departure,
                destination,
                tof,
                landing,
              },
            },
          },
        },
      });
      const getCareerFlightHours = await prisma.career.findUnique({
        where: { id: careerId },
      });
      let tTof: number = parseFloat(
        (getCareerFlightHours!.flightHours + tof).toFixed(1)
      );
      let updateCareerFlightHours = await prisma.career.update({
        where: { id: careerId },
        data: { flightHours: { set: tTof } },
      });
      if (updateUserLogbook) {
        res.status(200).send({ message: 'Logbook updated succesfully' });
      }
    });
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    if (e.failures()) {
      validationMessagesFunction(e.failures());
      res.send(errorMessages);
    } else {
      res.send(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
});

Router.patch('/updatelogbookentry', validateAccessToken, async (req, res) => {
  const careerId: string = req.body?.careerId;
  const entryId: string = req.body.entryId;
  let value: string | number | boolean = Object.values(req.body)[3] as
    | string
    | number
    | boolean;

  errorMessages = {};

  try {
    await prisma.$transaction(async (tx) => {
      const entryData: any = await prisma.entry.findUnique({
        where: { id: entryId },
      });

      let logbookEntryData: any;
      if (Object.keys(req.body)[3] == 'tof') {
        if (typeof value == undefined) {
          value = -1;
        }
        logbookEntryData = {
          entryId,
          [Object.keys(req.body)[3]]: parseFloat(value as string),
        };
      } else {
        logbookEntryData = {
          entryId,
          [Object.keys(req.body)[3]]: value,
        };
      }

      assert(logbookEntryData, EditedLogbookEntryValidation);
      let updatedEntry: any;
      if (Object.keys(req.body)[3] == 'tof') {
        {
          //find the difference between old entry and updated entry and recalculate flight hours
          let tTof: number = parseFloat(value as string) - entryData.data.tof;
          const getCareerFlightHours = await prisma.career.findUnique({
            where: { id: careerId },
          });
          tTof = parseFloat(
            (getCareerFlightHours!.flightHours + tTof).toFixed(1)
          );
          const updateCareerFlightHours = await prisma.career.update({
            where: { id: careerId },
            data: { flightHours: { set: tTof } },
          });

          updatedEntry = {
            ...(entryData?.data as Prisma.JsonObject),
            [Object.keys(req.body)[3] as string]: parseFloat(value as string),
          };
        }
      } else {
        updatedEntry = {
          ...(entryData?.data as Prisma.JsonObject),
          [Object.keys(req.body)[3] as string]: value,
        };
      }

      const updateUserLogbook = await prisma.entry.update({
        where: {
          id: entryId,
        },
        data: {
          data: { ...(updatedEntry as Prisma.JsonObject) },
        },
      });
      if (updateUserLogbook) {
        res.status(200).send({ message: 'Logbook updated succesfully' });
      }
    });
  } catch (e) {
    (e: Error) => console.error('Error:', e.message);
    if (e.failures()) {
      validationMessagesFunction(e.failures());
      res.send(errorMessages);
    } else {
      res.send(e.message);
    }
  } finally {
    await prisma.$disconnect();
  }
});
