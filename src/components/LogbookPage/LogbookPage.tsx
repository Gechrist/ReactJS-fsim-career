import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { IErrorMessage } from '../../../crud-service/routes/router';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import ExpandTable from './expand-table.svg';
import axios from 'axios';
import Notification from '../Notifications/Notification';
import Loading from '../Loading/Loading';
import PromoMessage from '../Notifications/PromoMessage';
import './LogbookPage.css';
import { contentSecurityPolicy } from 'helmet';

type EntryValue = {
  value: string | number | boolean;
};

const LogbookPage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [expandTable, setExpandTable] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [promoImage, setPromoImage] = useState<string>('');
  const [promoMessage, setPromoMessage] = useState<string>('');
  const [searchField, setSearchField] = useState<string>('');
  const [errorId, setErrorId] = useState<string>('');
  const [errorMessages, setErrorMessages] = useState<IErrorMessage>({});
  const [page, setPage] = useState<number>(1);
  const [perPageNumber, setPerPageNumber] = useState<number>(10);
  const [newEntryLanding, setNewEntryLanding] = useState<string>('');
  const newEntryRef = useRef<Array<HTMLInputElement | null>>([]);
  const searchRef = useRef<HTMLInputElement | null>(null);

  let newEntry: any = {};

  const crudService = import.meta.env.VITE_CRUD_SERVICE_URL;

  const logbookEntries: any = useQuery({
    queryKey: [
      'logbook',
      location.state.logbookId,
      page,
      perPageNumber,
      searchField,
    ],
    queryFn: () =>
      getLogbookFunction(
        location.state.logbookId,
        page,
        perPageNumber,
        searchField
      ),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (logbookEntries.data) {
      checkFlightHours(logbookEntries);
    }
  }, [logbookEntries.data]);

  const numberOfPages: number = logbookEntries?.data?.meta?.lastPage;

  const getLogbookFunction = async (
    logbookId: string,
    pageNumber: number,
    perPageNumber?: number,
    searchField?: string
  ): Promise<any> => {
    const accessToken: string = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/getlogbook`,
        {
          logbookId: logbookId,
          pageNumber,
          perPageNumber,
          searchField,
          careerId: location.state.careerId,
        },
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(5000),
        }
      );
      return data;
    } catch (err) {
      setMessage(
        'There was an error retrieving your logbook. Please try again'
      );
      throw new Error(err.message);
    }
  };
  const createLogbookEntryMutation = useMutation({
    mutationFn: (e: React.FormEvent) => {
      return createLogbookEntryFunction(e);
    },
    onSettled: () => {
      Promise.all([
        queryClient.invalidateQueries(['logbook', location.state.logbookId], {
          exact: false,
        }),
        queryClient.invalidateQueries(['career', location.state.careerId], {
          exact: false,
        }),
      ]);
      setNewEntryLanding('');
      setIsLoading(false);
    },
    onError: (err: Error) => setIsLoading(false),
  });

  const editLogbookEntryMutation = useMutation({
    mutationFn: ({
      id,
      key,
      value,
    }: {
      id: string;
      key: string;
      value: EntryValue;
    }) => {
      return editLogbookEntryFunction(id, key, value);
    },
    onSettled: () => {
      Promise.all([
        queryClient.invalidateQueries(['logbook', location.state.logbookId], {
          exact: false,
        }),
        queryClient.invalidateQueries(['career', location.state.careerId], {
          exact: false,
        }),
      ]);
    },
    onError: (err: Error) => {
      setIsLoading(false);
    },
  });

  const createLogbookEntryFunction = async (
    e: React.FormEvent
  ): Promise<any> => {
    if (newEntryRef.current[5]?.name.toString().includes('tof')) {
      if (newEntryRef.current[5].value.toString()[0] == '.') {
        newEntryRef.current[5].value = `0${newEntryRef.current[5].value}`;
      }
      newEntryRef.current[5].value = newEntryRef.current[5]?.value
        .toString()
        .includes('.')
        ? `${
            newEntryRef.current[5]?.value.toString().split('.')[0]
          }.${newEntryRef.current[5]?.value.toString().split('.')[1].charAt(0)}`
        : newEntryRef.current[5]?.value;
    }
    newEntry.date = newEntryRef.current[0]?.value;
    newEntry.aircraftType = newEntryRef.current[1]?.value;
    newEntry.aircraftTailNumber = newEntryRef.current[2]?.value;
    newEntry.departure = newEntryRef.current[3]?.value;
    newEntry.destination = newEntryRef.current[4]?.value;
    newEntry.tof = newEntryRef.current[5]?.value;
    newEntry.landing = newEntryLanding;

    let formData: FormData = new FormData();
    formData.set('logbookId', location.state.logbookId);
    formData.set('careerId', location.state.careerId);
    formData.set('data', JSON.stringify(newEntry));
    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/createlogbookentry`,
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
      setMessage(
        'There was an error saving your flight entry. Please try again'
      );
      throw new Error(err.message);
    }
  };

  const editLogbookEntryFunction = async (
    id: string,
    key: string,
    value: EntryValue
  ): Promise<any> => {
    let formData: FormData = new FormData();
    formData.set('entryId', id);
    formData.set('careerId', location.state.careerId);
    formData.set('logbookId', location.state.logbookId);
    formData.set(key, value as unknown as string);
    const accessToken = await getAccessTokenSilently();
    try {
      const { data, status } = await axios.patch(
        `${crudService}/api/userdata/updatelogbookentry`,
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
      setMessage(
        'There was an error saving your flight entry. Please try again'
      );
      throw new Error(err.message);
    }
  };

  const handleEdit = (
    id: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    displayErrors('', {});
    setMessage('');
    e.currentTarget.blur();
    if (e.currentTarget.name.includes('tof')) {
      if (e.currentTarget.value[0] == '.') {
        e.currentTarget.value = `0${e.currentTarget.value}`;
      }
      e.currentTarget.value = e.currentTarget.value.includes('.')
        ? `${e.currentTarget.value.split('.')[0]}.${e.currentTarget.value
            .split('.')[1]
            .charAt(0)}`
        : e.currentTarget.value;
      if (e.currentTarget.value == '0.') {
        e.currentTarget.value = '';
      }
    }

    editLogbookEntryMutation.mutate(
      {
        id: id,
        key: e.currentTarget.name.toString().includes('landing')
          ? 'landing'
          : (e.currentTarget.name as string),
        value: e.currentTarget.value as unknown as EntryValue,
      },
      {
        onSettled: (data) => {
          if (data?.message) {
            setMessage(data.message);
          } else {
            displayErrors(id, data);
          }
        },
      }
    );
  };

  const handleExpand = () => {
    setExpandTable((oldValue) => !oldValue);
  };

  const handleSearch = () => {
    setSearchField(searchRef!.current!.value);
    searchRef!.current!.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    displayErrors('new', {});
    setIsLoading(true);
    createLogbookEntryMutation.mutate(e, {
      onSettled: (data) => {
        if (data?.message === undefined) {
          setErrorMessages(data);
        }
        if (data?.message) {
          setMessage(data.message);
          newEntryRef.current.map((element, index) => {
            if (index < 6 && element) {
              element.value = '';
            }
            if (index > 5 && element) {
              element.checked = false;
            }
          });
        }
      },
    });
  };

  const handlePromote = async (arg: string) => {
    promoteCareerMutation.mutate(arg, {
      onSettled: (data) => {
        if (data?.promoMessage) {
          setPromoMessage(data.promoMessage);
        }
      },
    });
  };

  const displayErrors = (id: string, errorMessages: IErrorMessage) => {
    setErrorId(id);
    setErrorMessages(errorMessages);
  };

  const cachedUserSettings = JSON.parse(
    localStorage.getItem('cachedUserSettings') as string
  );

  const promoteCareerMutation = useMutation({
    mutationFn: async (arg: string) => {
      return promoteCareerFunction(arg);
    },
  });

  const promoteCareerFunction = async (arg: string) => {
    let formData: FormData = new FormData();
    formData.append('careerId', location.state.careerId);
    formData.append('rank', arg);
    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/promoteuser`,
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
    } catch (error) {
      setMessage('There was an error promoting your pilot. Please try again');
      throw new Error(error.message);
    }
  };

  const checkFlightHours = (arg: any) => {
    if (cachedUserSettings.autAdvance) {
      const flightHours = arg.data.tTof;
      setPromoImage('');
      switch (true) {
        case flightHours < cachedUserSettings.autAdvanceData.secOfficer: {
          if (arg.data.rank == 'PILOTCADET') {
            break;
          }
          handlePromote('PILOTCADET');
          setPromoImage('PILOTCADET');
          break;
        }
        case cachedUserSettings.autAdvanceData.secOfficer < flightHours &&
          flightHours < cachedUserSettings.autAdvanceData.firOfficer: {
          if (arg.data.rank == 'SECONDOFFICER') {
            break;
          }
          handlePromote('SECONDOFFICER');
          setPromoImage('SECONDOFFICER');
          break;
        }

        case flightHours > cachedUserSettings.autAdvanceData.firOfficer &&
          flightHours < cachedUserSettings.autAdvanceData.cpt: {
          if (arg.data.rank == 'FIRSTOFFICER') {
            break;
          }
          handlePromote('FIRSTOFFICER');
          setPromoImage('FIRSTOFFICER');
          break;
        }

        case flightHours > cachedUserSettings.autAdvanceData.cpt &&
          flightHours < cachedUserSettings.autAdvanceData.srCaptain: {
          if (arg.data.rank == 'CAPTAIN') {
            break;
          }
          handlePromote('CAPTAIN');
          setPromoImage('CAPTAIN');
          break;
        }
        case flightHours > cachedUserSettings.autAdvanceData.srCaptain: {
          if (arg.data.rank == 'SENIORCAPTAIN') {
            break;
          }
          handlePromote('SENIORCAPTAIN');
          setPromoImage('SENIORCAPTAIN');
          break;
        }

        default:
          break;
      }
    }
  };

  return (
    <div className="logbook-wrapper">
      <Helmet>
        <title>Logbook - FlightSim Career</title>
        <link rel="canonical" href="/dashboard/pilot" />
      </Helmet>{' '}
      {logbookEntries.isLoading ? (
        <Loading />
      ) : (
        <div className="logbook-options">
          {message && <Notification message={message} />}
          {promoImage && (
            <PromoMessage promoMessage={promoMessage} promoImage={promoImage} />
          )}
          <h2>{logbookEntries.data.owner} Logbook</h2>
          <table className="logbook-table">
            <colgroup>
              <col
                className={`collapse-table-part${expandTable ? '_active' : ''}`}
                span={4}
              />
              <col
                className={`collapse-table-part${
                  !expandTable ? '_active' : ''
                }`}
                span={4}
              />
            </colgroup>
            <thead>
              <tr>
                <th>Date:</th>
                <th>Type:</th>
                <th>Tail Number:</th>
                <th className="expand-table">
                  From:{' '}
                  <img
                    src={ExpandTable}
                    alt="icon to expand mobile tables"
                    aria-label="icon to expand table for mobile devices"
                    onClick={handleExpand}
                  />
                </th>
                <th className="expand-table">
                  <img
                    style={{ left: 0 }}
                    src={ExpandTable}
                    onClick={handleExpand}
                    aria-label="icon to expand table for mobile devices"
                  />{' '}
                  To:
                </th>
                <th>Time of Flight:</th>
                <th>Day Landing:</th>
                <th>Night Landing:</th>
              </tr>
            </thead>
            <tbody>
              {logbookEntries?.data?.data?.length > 0 &&
                logbookEntries?.data?.data?.map((entry: any) => (
                  <tr key={entry.id}>
                    <td>
                      <input
                        onBlur={(e) => {
                          e.currentTarget.value != entry.data.date
                            ? handleEdit(entry.id, e)
                            : null;
                        }}
                        type="text"
                        name="date"
                        defaultValue={entry.data.date}
                      />
                      {errorMessages?.date && entry.id === errorId && (
                        <span>{errorMessages.date}</span>
                      )}
                    </td>
                    <td>
                      <input
                        onBlur={(e) => {
                          e.currentTarget.value != entry.data.aircraftType
                            ? handleEdit(entry.id, e)
                            : null;
                        }}
                        type="text"
                        name="aircraftType"
                        defaultValue={entry.data.aircraftType}
                      />
                      {errorMessages?.aircraftType && entry.id === errorId && (
                        <span>{errorMessages.aircraftType}</span>
                      )}
                    </td>
                    <td>
                      <input
                        onBlur={(e) => {
                          e.currentTarget.value != entry.data.aircraftTailNumber
                            ? handleEdit(entry.id, e)
                            : null;
                        }}
                        type="text"
                        name="aircraftTailNumber"
                        defaultValue={entry.data.aircraftTailNumber}
                      />
                      {errorMessages?.aircraftTailNumber &&
                        entry.id === errorId && (
                          <span>{errorMessages.aircraftTailNumber}</span>
                        )}
                    </td>
                    <td>
                      <input
                        onBlur={(e) => {
                          e.currentTarget.value != entry.data.departure
                            ? handleEdit(entry.id, e)
                            : null;
                        }}
                        type="text"
                        name="departure"
                        defaultValue={entry.data.departure}
                      />
                      {errorMessages?.departure && entry.id === errorId && (
                        <span>{errorMessages.departure}</span>
                      )}
                    </td>
                    <td>
                      <input
                        onBlur={(e) => {
                          e.currentTarget.value != entry.data.destination
                            ? handleEdit(entry.id, e)
                            : null;
                        }}
                        type="text"
                        name="destination"
                        defaultValue={entry.data.destination}
                      />
                      {errorMessages?.destination && entry.id === errorId && (
                        <span>{errorMessages.destination}</span>
                      )}
                    </td>
                    <td>
                      <input
                        onBlur={(e) => {
                          e.currentTarget.value != entry.data.tof
                            ? handleEdit(entry.id, e)
                            : null;
                        }}
                        type="text"
                        name="tof"
                        defaultValue={entry.data.tof}
                      />
                      {errorMessages?.tof && entry.id == errorId ? (
                        <span>{errorMessages.tof}</span>
                      ) : null}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleEdit(entry.id, e)}
                        type="radio"
                        name={`${entry.id}-landing`}
                        defaultChecked={entry.data.landing == 'day'}
                        value="day"
                      />
                      {errorMessages?.landing && entry.id === errorId && (
                        <span>{errorMessages.landing}</span>
                      )}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleEdit(entry.id, e)}
                        type="radio"
                        name={`${entry.id}-landing`}
                        value="night"
                        defaultChecked={entry.data.landing == 'night'}
                      />
                      {errorMessages?.landing && entry.id === errorId && (
                        <span>{errorMessages.landing}</span>
                      )}
                    </td>
                  </tr>
                ))}
              <tr>
                <td>
                  <input
                    name="date"
                    ref={(element) => (newEntryRef.current[0] = element)}
                    type="text"
                  />
                  {errorMessages?.date && errorId == 'new' && (
                    <span>{errorMessages.date}</span>
                  )}
                </td>
                <td>
                  {' '}
                  <input
                    name="aircraftType"
                    type="text"
                    ref={(element) => (newEntryRef.current[1] = element)}
                  />
                  {errorMessages?.aircraftType && errorId == 'new' && (
                    <span>{errorMessages.aircraftType}</span>
                  )}
                </td>
                <td>
                  {' '}
                  <input
                    name="aircraftTailNumber"
                    ref={(element) => (newEntryRef.current[2] = element)}
                    type="text"
                  />
                  {errorMessages?.aircraftTailNumber && errorId == 'new' && (
                    <span>{errorMessages.aircraftTailNumber}</span>
                  )}
                </td>
                <td>
                  {' '}
                  <input
                    name="departure"
                    ref={(element) => (newEntryRef.current[3] = element)}
                    type="text"
                  />
                  {errorMessages?.departure && errorId == 'new' && (
                    <span>{errorMessages.departure}</span>
                  )}
                </td>
                <td>
                  {' '}
                  <input
                    name="destination"
                    ref={(element) => (newEntryRef.current[4] = element)}
                    type="text"
                  />
                  {errorMessages?.destination && errorId == 'new' && (
                    <span>{errorMessages.destination}</span>
                  )}
                </td>
                <td>
                  {' '}
                  <input
                    name="tof"
                    ref={(element) => (newEntryRef.current[5] = element)}
                    type="text"
                  />
                  {errorMessages?.tof && errorId == 'new' ? (
                    <span>{errorMessages.tof}</span>
                  ) : null}
                </td>
                <td>
                  {' '}
                  <input
                    name="landing"
                    ref={(element) => (newEntryRef.current[6] = element)}
                    type="radio"
                    value="day"
                    onChange={() => setNewEntryLanding('day')}
                  />
                  {errorMessages?.landing && errorId == 'new' && (
                    <span>{errorMessages.landing}</span>
                  )}
                </td>

                <td>
                  {' '}
                  <input
                    name="landing"
                    ref={(element) => (newEntryRef.current[7] = element)}
                    type="radio"
                    value="night"
                    onChange={() => setNewEntryLanding('night')}
                  />
                  {errorMessages?.landing && errorId == 'new' && (
                    <span>{errorMessages.landing}</span>
                  )}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>
                  Total Flights: {logbookEntries.data.tFlights}
                </td>
                <td colSpan={2}>
                  Total Flight Hours: {logbookEntries.data.tTof}
                </td>
                <td colSpan={2}>
                  Total Day Landings: {logbookEntries.data.tDayLandings}
                </td>
                <td colSpan={2}>
                  {' '}
                  Total Night Landings: {logbookEntries.data.tNightLandings}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="table-navigation">
            <div>
              <section className="buttons">
                <button
                  disabled={logbookEntries?.data?.meta?.currentPage === 1}
                  onClick={() => setPage(1)}
                >
                  &lt;&lt;
                </button>
                <button
                  disabled={logbookEntries?.data?.meta?.currentPage === 1}
                  onClick={() => setPage((oldPage) => oldPage - 1)}
                >
                  &lt;
                </button>
                <button
                  disabled={
                    logbookEntries?.data?.meta?.currentPage === numberOfPages
                  }
                  onClick={() => setPage((oldPage) => oldPage + 1)}
                >
                  &gt;
                </button>
                <button
                  disabled={
                    logbookEntries?.data?.meta?.currentPage === numberOfPages
                  }
                  onClick={() => setPage(numberOfPages)}
                >
                  &gt;&gt;
                </button>
              </section>
              <section className="page-controls">
                <p>Page:</p>
                <input
                  type="number"
                  step="1"
                  min="1"
                  max={numberOfPages}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPage(e.target.value as unknown as number)
                  }
                  value={page}
                />
                <p>of {numberOfPages} </p>
              </section>
              <section className="page-controls">
                <p>Entries per page:</p>
                <input
                  type="number"
                  step="1"
                  min="1"
                  defaultValue={logbookEntries?.data?.meta?.perPage}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPerPageNumber(e.target.value as unknown as number)
                  }
                />{' '}
              </section>
            </div>
            <section className="search-controls">
              <input
                id="search-input"
                type="text"
                placeholder="Search..."
                ref={searchRef}
              />
              <button id="search-button" onClick={handleSearch}>
                Search
              </button>
            </section>
          </div>

          {isLoading ? (
            <button id="entry-submit-button" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faCircleNotch} spin />
              &nbsp; Save New Entry
            </button>
          ) : (
            <button id="entry-submit-button" onClick={handleSubmit}>
              Save New Entry
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LogbookPage;
