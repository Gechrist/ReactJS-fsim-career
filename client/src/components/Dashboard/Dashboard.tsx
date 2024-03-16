import { useState, useEffect, useContext } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import {
  Outlet,
  useNavigate,
  NavigateFunction,
  useMatch,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { StateContext } from '../../context/context';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import Notification from '../Notifications/Notification';
import PilotCard from '../Cards/PilotCard';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';
import './Dashboard.css';

const Dashboard = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { dispatch } = useContext<any>(StateContext);
  const queryClient = useQueryClient();
  const [message, setMessage] = useState<string>('');
  const [showCareers, setShowCareers] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate: NavigateFunction = useNavigate();
  const dashboardRoute = useMatch('/dashboard');

  const crudService = import.meta.env.VITE_CRUD_SERVICE_URL;

  useEffect(() => {
    if (dashboardRoute?.pathname != '/dashboard') {
      setShowCareers(false);
      setIsLoading(false);
    }
    return () => {
      setShowCareers(true);
    };
  }, [dashboardRoute]);

  // get or create user
  const userData = useQuery({
    queryKey: ['user', user?.sub?.slice(6) as string],
    queryFn: () =>
      findOrCreateUserFunction('getuser', user?.sub?.slice(6) as string),
  });

  const findOrCreateUserFunction = async (arg: string, loggedUser: string) => {
    try {
      const accessToken: string = await getAccessTokenSilently();

      const { data, status } = await axios.post(
        `${crudService}/api/userdata/${arg}`,
        { data: { id: loggedUser } },
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(5000),
        }
      );
      if (status === 500) {
        return undefined;
      }
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  const createUserMutation = useMutation({
    mutationFn: async () => {
      return findOrCreateUserFunction(
        'createuser',
        user?.sub?.slice(6) as string
      );
    },
    onSettled: (data) => saveToLocalStorage(data),
  });

  const dispatchSettingsToContext = (userData: any) => {
    dispatch({
      type: 'SET_THEME',
      payload: userData.darkMode ? 'dark' : 'light',
    });
    dispatch({
      type: 'SET_ATM_ADVANCE',
      payload: userData.autAdvance,
    });
  };

  const saveToLocalStorage = (userData: any) => {
    localStorage.setItem(
      'cachedUserSettings',
      JSON.stringify({
        id: userData.id,
        darkMode: userData.darkMode,
        autAdvance: userData.autAdvance,
        autAdvanceData: { ...userData.autAdvanceData },
      })
    );
    dispatchSettingsToContext(userData);
  };

  const storeUserDataToCache = (userData: any) => {
    if (!userData?.id) {
      createUserMutation.mutate();
    } else {
      if (!localStorage.getItem('cachedUserSettings')) {
        saveToLocalStorage(userData);
      } else {
        dispatchSettingsToContext(userData);
      }
    }
  };

  useEffect(() => {
    if (userData.error) {
      throw new Error(userData.error as string);
    }
  }, [userData.error]);

  useEffect(() => {
    if (userData.data) {
      storeUserDataToCache(userData.data);
    }
  }, [userData.data]);

  // if user exists get his careers if available
  const careersData = useQuery({
    queryKey: ['careers', user?.sub?.slice(6) as string],
    queryFn: () => getCareersFunction(user?.sub?.slice(6) as string),
    enabled: dashboardRoute?.pathname == '/dashboard' && !!userData.data,
  });

  const getCareersFunction = async (loggedUser: string) => {
    try {
      const accessToken: string = await getAccessTokenSilently();
      const { data } = await axios.get(
        `${crudService}/api/userdata/getcareers`,
        {
          params: { id: loggedUser },
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(5000),
        }
      );
      return data;
    } catch (err) {
      console.error(err.message);
      return { message: 'Something went wrong. Please try again' };
    }
  };

  const deleteCareerMutation = useMutation({
    mutationFn: async (id: string) => {
      const accessToken: string = await getAccessTokenSilently();
      return deleteCareerFunction(id, accessToken);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(
        ['careers', user?.sub?.slice(6) as string],
        {
          exact: true,
        }
      );
    },
  });

  const deleteCareerFunction = async (id: string, accessToken: string) => {
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/deletecareer`,
        { data: { careerId: id } },
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
      console.error(err.message);
      return { message: 'Something went wrong. Please try again' };
    }
  };

  const handleDelete = async (id: string) => {
    deleteCareerMutation.mutate(id, {
      onSuccess: (data: any) => {
        setMessage(data.message);
      },
    });
  };

  useEffect(() => {
    if (careersData.error || careersData.data) {
      setIsLoading(false);
      if (careersData.error) {
        throw new Error('Error:', careersData.error);
      }
    }
  }, [careersData.error, careersData.data]);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Dashboard - FlightSim Career</title>
          <link rel="canonical" href="/dashboard" />
        </Helmet>
      </HelmetProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="content-wrapper">
          <NavBar />
          {message && <Notification message={message} />}
          {showCareers && (
            <div className="careers-elements">
              <div className="careers-container">
                {careersData.data?.length > 0 &&
                  careersData.data?.map((career: any) => (
                    <PilotCard
                      key={career.id}
                      id={career.id}
                      name={career.name}
                      type={career.careerType}
                      onClick={() => {
                        navigate('./pilot', {
                          state: {
                            careerId: career.id,
                            logbookId: career.logbook.id,
                          },
                        });
                      }}
                      deleteCareer={() => handleDelete(career.id)}
                    />
                  ))}
                {careersData.data?.message && <h2>No careers found</h2>}
                {careersData.data?.length === 0 && <h2>No careers found</h2>}
              </div>
              <button
                onClick={() => {
                  navigate('/dashboard/new');
                }}
              >
                New Career
              </button>
            </div>
          )}
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
