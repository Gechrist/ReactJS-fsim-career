import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
} from 'react-simple-maps';
import { useAuth0 } from '@auth0/auth0-react';
import { Helmet } from 'react-helmet-async';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from '../Notifications/Notification';
import axios from 'axios';
import world from './worldCountries.json';
import './CareerDispatch.css';

const CareerDispatch = ({ careerData }: { careerData: any }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [legNumber, setLegNumber] = useState<string>('1');
  const [minLeg, setMinLeg] = useState<string>('1');
  const [maxLeg, setMaxLeg] = useState<string>('10000');
  const [normalDispatchLines, setNormalDispatchLines] = useState<number[]>([]);
  const [grayOutDispatchLines, setGrayoutDispatchLines] = useState<number[]>(
    []
  );
  const [inclAircraft, setInclAircraft] = useState<boolean>(true);
  const [inclCompany, setInclCompany] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [toggleComplete, setToggleComplete] = useState<boolean>(false);
  const [showCoords, setShowCoords] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [dispatchData, setDispatchData] = useState<any>([]);
  const [lineCoords, setLineCoords] = useState<Array<number | null>>([]);
  const [icaoAirports, setIcaoAirports] = useState<Array<string | null>>([]);
  const [errorMessages, setErrorMessages] = useState<{
    aircraft: string;
    base: string;
    company: string;
    minLeg: string;
    maxLeg: string;
    message: string;
  }>({
    aircraft: '',
    base: '',
    company: '',
    minLeg: '',
    maxLeg: '',
    message: '',
  });
  const geoUrl = world;
  let origDispatchLines: number[] = [];
  let grayDispatchLines: number[] = [];

  const appDomain = import.meta.env.VITE_APP_DOMAIN;
  const crudService = import.meta.env.VITE_CRUD_SERVICE_PORT;
  const dispatchService = import.meta.env.VITE_DISPATCH_SERVICE_PORT;

  const handleNewDispatch = () => {
    lineCoords.splice(0, lineCoords.length);
    setShowCoords(false);
    setErrorMessages({
      aircraft: '',
      base: '',
      company: '',
      minLeg: '',
      maxLeg: '',
      message: '',
    });
    setIsFetching(true);

    generateDispatchDataMutation.mutate({} as unknown as void, {
      onSettled: (data: any) => {
        if (Object.keys(errorMessages).includes(Object.keys(data)[0])) {
          setErrorMessages({ ...errorMessages, ...data });
        } else if (data && !data.message) {
          setDispatchData([...data]);
        }
      },
    });
  };

  const handleMarkFlightComplete = (
    entry: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!toggleComplete) {
      setToggleComplete(true);
    }
    const newDispatchData = dispatchData.map((line: any, index: number) => {
      if (index === entry) {
        line.completed = e.target.checked;
      }
      return line;
    });
    setDispatchData(newDispatchData);
  };

  const colorizeDispatchLinesFunction = (dispatchData: any) => {
    normalDispatchLines.splice(0, normalDispatchLines.length);
    grayOutDispatchLines.splice(0, grayOutDispatchLines.length);
    origDispatchLines = [];
    grayDispatchLines = [];
    for (let i: number = 0; i < dispatchData.length; i++) {
      if (!dispatchData[i]?.completed) {
        origDispatchLines.push(i);
      } else {
        grayDispatchLines.push(i);
      }
      setNormalDispatchLines((normalDispatchLines) => [
        ...normalDispatchLines,
        ...origDispatchLines,
      ]);
      setGrayoutDispatchLines((grayoutDispatchLines) => [
        ...grayoutDispatchLines,
        ...grayDispatchLines,
      ]);
    }
  };

  // make sure getDispatch runs only when careerData is defined with enabled
  const getDispatchData: any = useQuery({
    queryKey: ['dispatch', user?.sub?.slice(6) as string],
    queryFn: () => getDispatchDataFunction(),
    enabled: careerData?.id !== undefined,
    refetchOnMount: 'always',
  });

  const getDispatchDataFunction = async (): Promise<any> => {
    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${appDomain}:${crudService}/api/userdata/getdispatch`,
        { careerId: careerData.id },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(5000),
        }
      );
      return data;
    } catch (err) {
      console.error(err.message);
      setErrorMessages({
        ...errorMessages,
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  const generateDispatchDataMutation = useMutation({
    mutationFn: () => {
      return generateDispatchDataFunction();
    },
    onSettled: () => setIsFetching(false),
  });

  const generateDispatchDataFunction = async () => {
    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${appDomain}:${dispatchService}/api/dispatch/generatedispatch`,
        {
          legNumber,
          careerBase: careerData.base,
          careerAircraft: inclAircraft ? careerData.aircraft : null,
          careerCompany: inclCompany ? careerData.company : null,
          minLeg,
          maxLeg,
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(25000),
        }
      );
      return data;
    } catch (err) {
      console.error(err.message);
      setErrorMessages({
        ...errorMessages,
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  useEffect(() => {
    if (getDispatchData.data) {
      setDispatchData([...getDispatchData.data]);
    }
  }, [getDispatchData.data]);

  useEffect(() => {
    if (dispatchData && toggleComplete) {
      saveDispatchDataMutation.mutate();
    }
    colorizeDispatchLinesFunction(dispatchData);
  }, [dispatchData]);

  const saveDispatchDataMutation = useMutation({
    mutationFn: () => {
      return saveDispatchDataFunction();
    },
  });

  const handleSaveDispatch = () => {
    setMessage('');
    setIsSaving(true);
    saveDispatchDataMutation.mutate({} as unknown as void, {
      onSettled: (data) => {
        setIsSaving(false);
        if (data && data?.message.includes('succesfully')) {
          setMessage(data.message);
        }
      },
    });
  };

  const saveDispatchDataFunction = async () => {
    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${appDomain}:${crudService}/api/userdata/savedispatch`,
        {
          careerId: careerData.id,
          dispatchData,
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(5000),
        }
      );
      return data;
    } catch (err) {
      console.error(err.message);
      setErrorMessages({
        ...errorMessages,
        message:
          'Something went wrong with saving your dispatch. Please try again.',
      });
    }
  };

  const colorDispatchLineFunction = (index: number) => {
    if (normalDispatchLines.includes(index)) {
      setNormalDispatchLines(
        normalDispatchLines.filter((i: number) => i !== index)
      );
      setGrayoutDispatchLines([...grayOutDispatchLines, index]);
    } else if (grayOutDispatchLines.includes(index)) {
      setGrayoutDispatchLines(
        grayOutDispatchLines.filter((i: number) => i !== index)
      );
      setNormalDispatchLines([...normalDispatchLines, index]);
    }
  };

  const travelLineCoordsFunction = (
    depLong: number,
    depLat: number,
    arrLong: number,
    arrLat: number,
    icaoDep: string,
    icaoArr: string
  ) => {
    setShowCoords(true);
    lineCoords.splice(0, lineCoords.length);
    setLineCoords([...lineCoords, depLong, depLat, arrLong, arrLat]);
    icaoAirports.splice(0, icaoAirports.length);
    setIcaoAirports([...icaoAirports, icaoDep, icaoArr]);
  };

  return (
    <div className="career-options">
      <Helmet>
        <title>Dispatch - FlightSim Career</title>
        <link rel="canonical" href="/dashboard/pilot" />
      </Helmet>
      {message && <Notification message={message} />}
      <div className="dispatch-menu">
        <h2>Dispatch</h2>
        <div id="dispatch-options">
          <select
            style={{ textTransform: 'uppercase', textAlign: 'center' }}
            name="aircraftType"
            defaultValue="1"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setLegNumber(e.target.value)
            }
          >
            <option value="1">1 Leg</option>
            <option value="2">2 Leg</option>
            <option value="3">3 Leg</option>
            <option value="4">4 Leg</option>
            <option value="5">5 Leg</option>
            <option value="6">6 Leg</option>
            <option value="7">7 Leg</option>
          </select>
          <input
            type="number"
            placeholder="Min. Leg. (Default: 1nm)"
            step="1"
            min="0"
            style={{ textAlign: 'center' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMinLeg(e.target.value)
            }
          />
          <input
            type="number"
            placeholder="Max. Leg. (Default: 10,000nm)"
            step="1"
            min="0"
            style={{ textAlign: 'center' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMaxLeg(e.target.value)
            }
          />
          <div>
            <label htmlFor="include-aircraft">Search by Aircraft:</label>
            <input
              type="checkbox"
              id="include-aircraft"
              checked={inclAircraft}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInclAircraft(!inclAircraft)
              }
            />
          </div>
          <div>
            <label htmlFor="include-company">Search by Company:</label>
            <input
              type="checkbox"
              id="include-company"
              checked={inclCompany}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInclCompany(!inclCompany)
              }
            />
          </div>
        </div>
        <div className="dispatch-table">
          <table>
            <thead>
              <tr>
                <th>Flight:</th>
                <th>Departure:</th>
                <th>Arrival:</th>
                <th>Time of Departure:</th>
                <th>Completed:</th>
              </tr>
            </thead>
            <tbody>
              {dispatchData && dispatchData.length > 0 ? (
                dispatchData.map((flight: any, index: number) => (
                  <tr
                    className={`${
                      grayOutDispatchLines.includes(index) &&
                      'dispatch-line' + ' ' + 'gray' + ' ' + index
                    }`}
                    key={index}
                    onClick={() =>
                      travelLineCoordsFunction(
                        flight.depLong,
                        flight.depLat,
                        flight.arrLong,
                        flight.arrLat,
                        flight.icaoDep,
                        flight.icaoArr
                      )
                    }
                  >
                    <td>{careerData?.company + ' ' + flight.flightNo}</td>
                    <td>{flight.icaoDep}</td>
                    <td>{flight.icaoArr}</td>
                    <td>{flight.depTime}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={flight?.completed ? true : false}
                        onChange={(e) => {
                          colorDispatchLineFunction(index);
                          handleMarkFlightComplete(index, e);
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {Object.values(errorMessages).map(
          (error: string, index: number) =>
            error != '' && (
              <span className="dispatch-errors" key={index}>
                {error}
              </span>
            )
        )}
        <div className="dispatch-buttons">
          {isFetching ? (
            <button onClick={() => handleNewDispatch()}>
              <FontAwesomeIcon icon={faCircleNotch} spin />
              &nbsp; New Dispatch{' '}
            </button>
          ) : (
            <button onClick={() => handleNewDispatch()}>New Dispatch </button>
          )}
          {isSaving ? (
            <button
              className="green-save-button"
              onClick={() => handleSaveDispatch()}
            >
              <FontAwesomeIcon icon={faCircleNotch} spin />
              &nbsp; Save Dispatch{' '}
            </button>
          ) : (
            <button
              className="green-save-button"
              onClick={() => handleSaveDispatch()}
            >
              Save Dispatch{' '}
            </button>
          )}
        </div>
        <div id="map">
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
              scale: 150,
            }}
          >
            <Graticule stroke="#DDD" />
            <Geographies
              geography={geoUrl}
              fill="#D6D6DA"
              stroke="#FFFFFF"
              strokeWidth={0.5}
            >
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            {lineCoords.length > 0 && (
              <Line
                from={[lineCoords[0] as number, lineCoords[1] as number]}
                to={[lineCoords[2] as number, lineCoords[3] as number]}
                stroke="#FF5533"
                strokeWidth={1}
                strokeLinecap="round"
              />
            )}
            {icaoAirports.length > 0 &&
              showCoords &&
              icaoAirports.map((airport: any, index: number) => (
                <Annotation
                  key={index}
                  subject={
                    index === 0
                      ? [lineCoords[0] as number, lineCoords[1] as number]
                      : [lineCoords[2] as number, lineCoords[3] as number]
                  }
                  dx={0}
                  dy={index === 0 ? 10 : -10}
                  connectorProps={{
                    stroke: '#FF5533',
                    strokeWidth: 0.5,
                    strokeLinecap: 'round',
                  }}
                >
                  <text
                    x="0"
                    y={index === 0 ? '8' : '-8'}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="#F53"
                  >
                    {airport}
                  </text>
                </Annotation>
              ))}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default CareerDispatch;
