import { useState, useContext, useRef } from 'react';
import { StateContext } from '../../context/context';
import { useMutation } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { IErrorMessage } from '../../../crud-service/routes/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet-async';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import NightModeIcon from './nightmode-icon.svg';
import AdvanceIcon from './advancement-icon.svg';
import axios from 'axios';
import Notification from '../Notifications/Notification';
import './Settings.css';

const Settings = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [advanceOptions, setAdvanceOptions] = useState<boolean>(
    state.advanceOptionsChecked
  );
  const [darkMode, setDarkMode] = useState<boolean>(
    state.theme == 'dark' ? true : false
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<IErrorMessage>({});
  const [message, setMessage] = useState<string>('');
  const [displaySetting, setDisplaySetting] = useState<Array<boolean>>([
    true,
    false,
  ]);
  const { getAccessTokenSilently } = useAuth0();
  const settingsRef = useRef<Array<HTMLInputElement | null>>([]);

  const crudService = import.meta.env.VITE_CRUD_SERVICE_URL;

  // preview settings until page refresh
  const darkModeFunction = () => {
    setDarkMode(!darkMode);
    dispatch({
      type: 'SET_THEME',
      payload: !darkMode ? 'dark' : 'light',
    });
  };

  const advanceOptionsFunction = () => {
    setAdvanceOptions(!advanceOptions);
    dispatch({
      type: 'SET_ATM_ADVANCE',
      payload: !advanceOptions,
    });
  };

  const updateSettingsMutation = useMutation({
    mutationFn: (e: React.FormEvent) => {
      return updateSettingsFunction(e);
    },
    onSuccess: () => {
      setIsLoading(false);
    },
    onError: (err: Error) => setIsLoading(false),
  });

  const updateSettingsFunction = async (e: React.FormEvent) => {
    let formData: FormData = new FormData(e.target as HTMLFormElement);
    formData.append('id', cachedUserSettings.id);
    const accessToken = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/setusersettings`,
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
      setMessage('Your settings could not be saved. Please try again');
      throw new Error(error.message);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessages({});
    setMessage('');
    setIsLoading(true);

    updateSettingsMutation.mutate(e, {
      onError: (data) => {
        if (data?.message === undefined) {
          setErrorMessages(data);
        }
      },
      onSettled: (data) => {
        if (data?.message) {
          setMessage(data.message);
          updateCache();
        }
      },
    });
  };

  const cachedUserSettings = JSON.parse(
    localStorage.getItem('cachedUserSettings') as string
  );

  const updateCache = () => {
    localStorage.setItem(
      'cachedUserSettings',
      JSON.stringify({
        ...cachedUserSettings,
        darkMode: settingsRef.current[0]?.checked ? true : false,
        autAdvance: settingsRef.current[1]?.checked ? true : false,
        ...(settingsRef.current[1]?.checked && {
          autAdvanceData: {
            secOfficer: settingsRef.current[2]?.value,
            firOfficer: settingsRef.current[3]?.value,
            cpt: settingsRef.current[4]?.value,
            srCaptain: settingsRef.current[5]?.value,
          },
        }),
      })
    );
  };

  return (
    <div className="career-menu-wrapper">
      <Helmet>
        <title>Settings - FlightSim Career</title>
        <link rel="canonical" href="/dashboard/settings" />
      </Helmet>
      {message && <Notification message={message} />}
      <aside className="career-menu-sidebar">
        <section
          className="career-menu-button"
          onClick={() =>
            setDisplaySetting((prevState) => (prevState = [true, false]))
          }
        >
          <p>Advancement</p>
          <img src={AdvanceIcon} alt="advance-rank" aria-label="advance-rank" />
        </section>
        <section
          className="career-menu-button"
          onClick={() =>
            setDisplaySetting((prevState) => (prevState = [false, true]))
          }
        >
          <p>Theme</p>
          <img src={NightModeIcon} alt="night-mode" aria-label="night-mode" />
        </section>
      </aside>
      <form className="career-menu-main" onSubmit={handleSubmit}>
        <h2 id="settings-title">Settings</h2>

        {displaySetting[1] ? (
          <div className="settings-main-options">
            <label className="toggle">
              <input
                onChange={darkModeFunction}
                className="toggle-checkbox"
                type="checkbox"
                name="darkmode"
                ref={(element) => (settingsRef.current[0] = element)}
                checked={state.theme == 'dark' ? true : false}
              />
              <div className="toggle-switch"></div>
              <h2 className="toggle-label">Enable Dark Theme:</h2>
            </label>
          </div>
        ) : (
          <div className="settings-main-options">
            <label className="toggle">
              <input
                onChange={advanceOptionsFunction}
                className="toggle-checkbox"
                type="checkbox"
                name="advancement"
                ref={(element) => (settingsRef.current[1] = element)}
                checked={state.advanceOptionsChecked}
              />
              <div className="toggle-switch"></div>
              <h2 className="toggle-label">Enable Automatic Advancement:</h2>
            </label>
          </div>
        )}
        {advanceOptions && displaySetting[0] && (
          <div className="settings-main-options">
            <h4>Minimum Flight Hours Required</h4>
            <div className="advance-options">
              <div className="advance-option-container">
                <h4>Second Officer:</h4>
                <input
                  type="number"
                  step="1"
                  min="0"
                  ref={(element) => (settingsRef.current[2] = element)}
                  defaultValue={
                    cachedUserSettings
                      ? cachedUserSettings?.autAdvanceData?.secOfficer
                      : 250
                  }
                  name="sohours"
                />
                <span>{errorMessages.soHours}</span>
              </div>

              <div className="advance-option-container">
                <h4>First Officer:</h4>
                <input
                  type="number"
                  step="1"
                  min="0"
                  ref={(element) => (settingsRef.current[3] = element)}
                  defaultValue={
                    cachedUserSettings
                      ? cachedUserSettings?.autAdvanceData?.firOfficer
                      : 1000
                  }
                  name="fohours"
                />
                <span>{errorMessages.foHours}</span>
              </div>

              <div className="advance-option-container">
                <h4>Captain:</h4>
                <input
                  type="number"
                  step="1"
                  min="0"
                  ref={(element) => (settingsRef.current[4] = element)}
                  defaultValue={
                    cachedUserSettings
                      ? cachedUserSettings?.autAdvanceData?.cpt
                      : 1500
                  }
                  name="cpthours"
                />
                <span>{errorMessages.cptHours}</span>
              </div>

              <div className="advance-option-container">
                <h4>Senior Captain:</h4>
                <input
                  type="number"
                  step="1"
                  min="0"
                  ref={(element) => (settingsRef.current[5] = element)}
                  defaultValue={
                    cachedUserSettings
                      ? cachedUserSettings?.autAdvanceData?.srCaptain
                      : 4000
                  }
                  name="scptHours"
                />
                <span>{errorMessages.scptHours}</span>
              </div>
            </div>
          </div>
        )}
        {isLoading ? (
          <div id="save-settings-button">
            <button className="green-save-button" type="submit">
              <FontAwesomeIcon icon={faCircleNotch} spin />
              &nbsp; Save Settings
            </button>
          </div>
        ) : (
          <div id="save-settings-button">
            <button className="green-save-button" type="submit">
              Save Settings
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Settings;
