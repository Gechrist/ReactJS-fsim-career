import { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { IErrorMessage } from '../../../../crud-service/routes/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet-async';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Notification from '../Notifications/Notification';
import Loading from '../Loading/Loading';
import './CareerPage.css';

const CareerPage = ({ careerData }: { careerData?: any }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();
  const flightHoursRef = useRef<HTMLInputElement | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [editCareerOptions, setEditCareerOptions] = useState<boolean>(true);
  const [userId] = useState<string>(user?.sub?.slice(6) as string);
  const [pilot, setPilotData] = useState<any>(careerData ?? null);
  const [errorMessages, setErrorMessages] = useState<IErrorMessage>({});
  const [isLoading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const crudService = import.meta.env.VITE_CRUD_SERVICE_URL;
  const dispatchService = import.meta.env.VITE_DISPATCH_SERVICE_URL;

  const cachedUserSettings = JSON.parse(
    localStorage.getItem('cachedUserSettings') as string
  );

  useEffect(() => {
    if (pathname === '/dashboard/new') {
      setEditCareerOptions(false);
    }
  }, [pathname]);

  const careerOptionsData: any = useQuery({
    queryKey: ['careerOptionsData'],
    queryFn: async () => {
      return getCareerOptionsDataFunction();
    },
  });

  const getCareerOptionsDataFunction = async () => {
    const accessToken: string = await getAccessTokenSilently();
    try {
      const { data } = await axios.get(
        `${dispatchService}/api/dispatch/getcareeroptionsdata`,
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return data;
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (careerOptionsData) {
      setLoading(false);
    }
  }, [careerOptionsData]);

  const createOrUpdateCareerMutation = useMutation({
    mutationFn: (e: React.FormEvent) => {
      return createOrUpdateCareerFunction(e);
    },
    onSettled: () => {
      setIsSaving(false);
      queryClient.invalidateQueries(['career']);
    },
    onError: (err: Error) => setIsSaving(false),
  });

  const createOrUpdateCareerFunction = async (e: React.FormEvent) => {
    //validate flight hours
    flightHoursRef!.current!.value[0] == '.'
      ? (flightHoursRef!.current!.value = `0${
          flightHoursRef!.current!.value.split('.')[0]
        }.${flightHoursRef!.current!.value.split('.')[1].charAt(0)}`)
      : flightHoursRef!.current!.value.includes('.')
      ? (flightHoursRef!.current!.value = `${
          flightHoursRef!.current!.value.split('.')[0]
        }.${flightHoursRef!.current!.value.split('.')[1].charAt(0)}`)
      : null;
    if (flightHoursRef!.current!.value == '0.') {
      flightHoursRef!.current!.value = '';
    }
    let formData: FormData = new FormData(e.target as HTMLFormElement);
    if (cachedUserSettings.autAdvance) {
      formData.set('rank', pilot?.rank || 'PILOTCADET');
      formData.set('flightHours', flightHoursRef!.current!.value);
    }

    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/${
          editCareerOptions ? 'updatecareer' : 'createcareer'
        }`,
        formData,
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
      return { message: 'Something went wrong. Please try again' };
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPilotData({ ...pilot, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages({});
    setMessage('');
    setIsSaving(true);
    createOrUpdateCareerMutation.mutate(e, {
      onSettled: (data) => {
        if (data?.message === undefined) {
          setErrorMessages(data);
        }
        if (data?.message) {
          setMessage(data.message);
        }
      },
    });
  };

  return (
    <div>
      <Helmet>
        {editCareerOptions ? (
          <title>Edit Career - FlightSim Career</title>
        ) : (
          <title>New Career - FlightSim Career</title>
        )}
        {editCareerOptions ? (
          <link rel="canonical" href="/dashboard/pilot" />
        ) : (
          <link rel="canonical" href="/dashboard/new" />
        )}
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="career-page-wrapper">
          <div className="career-page-options">
            {message && <Notification message={message} />}
            <form onSubmit={handleSubmit}>
              <input name="id" defaultValue={userId} type="hidden" />
              {pilot && (
                <input name="careerId" defaultValue={pilot.id} type="hidden" />
              )}
              <div className="career-info">
                <div className="pilot-info">
                  <div>
                    <label htmlFor="pilot">Pilot Name:</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Pilot Name"
                      id="pilot"
                      defaultValue={pilot ? pilot.name : ''}
                    />
                    <span>{errorMessages.name}</span>
                  </div>
                  <div>
                    <label htmlFor="rank">Rank:</label>
                    <select
                      id="rank"
                      name="rank"
                      value={pilot ? pilot.rank : 'PILOTCADET'}
                      onChange={(e) => handleChange(e)}
                      disabled={pilot?.id && cachedUserSettings.autAdvance}
                    >
                      <option
                        value="PILOTCADET"
                        style={{ backgroundImage: './pc.webp' }}
                      >
                        PILOT CADET
                      </option>
                      <option value="SECONDOFFICER">SECOND OFFICER</option>
                      <option value="FIRSTOFFICER">FIRST OFFICER</option>
                      <option value="CAPTAIN">CAPTAIN</option>
                      <option value="SENIORCAPTAIN">SENIOR CAPTAIN</option>
                    </select>
                    <span>{errorMessages.rank}</span>
                  </div>

                  <div>
                    <label htmlFor="hours">Flight Hours:</label>
                    <input
                      ref={flightHoursRef}
                      type="text"
                      name="flightHours"
                      placeholder="Your Flight Hours"
                      id="hours"
                      defaultValue={pilot && pilot.flightHours}
                      disabled={pilot?.id && cachedUserSettings.autAdvance}
                    />
                    <span>{errorMessages.flightHours}</span>
                  </div>
                </div>
                <div className="pilot-info">
                  <div>
                    <label htmlFor="company">Company:</label>
                    <input
                      type="text"
                      list="company-titles"
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      defaultValue={pilot ? pilot.company : ''}
                    />
                    <datalist id="company-titles">
                      {careerOptionsData.data?.companyData?.map(
                        (title: { company: string }) => (
                          <option key={title.company} value={title.company}>
                            {title.company}
                          </option>
                        )
                      )}
                    </datalist>
                    <span>{errorMessages.company}</span>
                  </div>

                  <div>
                    <label htmlFor="careerType">Career Type:</label>
                    <select
                      name="careerType"
                      id="careerType"
                      value={pilot ? pilot.careerType : 'AIRLINE'}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="AIRLINE">AIRLINE</option>
                      <option value="CARGO">CARGO</option>
                      <option value="CORPORATE">CORPORATE</option>
                    </select>
                    <span>{errorMessages.careerType}</span>
                  </div>

                  <div>
                    <label htmlFor="base">ICAO Base:</label>
                    <input
                      type="text"
                      id="base"
                      name="base"
                      style={{ textTransform: 'uppercase' }}
                      placeholder="Based out of..."
                      defaultValue={pilot ? pilot.base : ''}
                    />
                    <span>{errorMessages.base}</span>
                  </div>
                </div>
                <div className="pilot-info">
                  <div>
                    <label htmlFor="aircraft-type">Aircraft Type:</label>
                    <input
                      type="text"
                      list="aircraft-types"
                      id="aircraft-type"
                      style={{ textTransform: 'uppercase' }}
                      name="aircraftType"
                      placeholder="Your Aircraft Type"
                      defaultValue={pilot ? pilot.aircraft : ''}
                    />
                    <datalist id="aircraft-types">
                      {careerOptionsData.data?.aircraftData?.map(
                        (title: { aircraft: string }) => (
                          <option key={title.aircraft} value={title.aircraft}>
                            {title.aircraft}
                          </option>
                        )
                      )}
                    </datalist>
                    <span>{errorMessages.aircraftType}</span>
                  </div>
                </div>
              </div>
              <div className="save-info-button">
                <div>
                  {isSaving ? (
                    <button className="green-save-button" type="submit">
                      <FontAwesomeIcon icon={faCircleNotch} spin />
                      &nbsp;
                      {!editCareerOptions ? 'Create Career' : 'Save Career'}
                    </button>
                  ) : (
                    <button className="green-save-button" type="submit">
                      {!editCareerOptions ? 'Create Career' : 'Save Career'}
                    </button>
                  )}
                </div>
                <button className="red-reset-button" type="reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
export default CareerPage;
