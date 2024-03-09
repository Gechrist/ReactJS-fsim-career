import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CareerPage from '../CareerPage/CareerPage';
import CareerDispatch from '../CareerDispatch/CareerDispatch';
import EditIcon from './edit-career.svg';
import DispatchIcon from './dispatch-career.svg';
import LogbookIcon from './logbook-icon.webp';
import LogbookPage from '../LogbookPage/LogbookPage';
import axios from 'axios';
import './CareerMenu.css';

const CareerMenu = () => {
  const [displayCareerSetting, setDisplayCareerSetting] = useState<
    Array<boolean>
  >([true, false, false]);

  const { getAccessTokenSilently } = useAuth0();
  const location = useLocation();

  const crudService = import.meta.env.VITE_CRUD_SERVICE_URL;

  const careerData = useQuery({
    queryKey: ['career', location.state.careerId],
    queryFn: async () => getCareerFunction(),
  });

  const getCareerFunction = async () => {
    const accessToken: string = await getAccessTokenSilently();
    try {
      const { data } = await axios.post(
        `${crudService}/api/userdata/getcareer`,
        { careerId: location.state.careerId },
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
          },
          signal: AbortSignal.timeout(5000),
        }
      );
      return data;
    } catch (e) {
      //let react router ErrorElement deal with it
    }
  };

  useEffect(() => {
    if (careerData.error) {
      throw new Error(careerData.error as string);
    }
  }, [careerData.error]);

  return (
    <div className="career-menu-wrapper">
      <aside className="career-menu-sidebar">
        <section
          className="career-menu-button"
          onClick={() =>
            setDisplayCareerSetting(
              (prevState) => (prevState = [true, false, false])
            )
          }
        >
          <p>Dispatch</p>
          <img
            src={DispatchIcon}
            alt="dispatch-career"
            aria-label="dispatch-career"
          />
        </section>
        <section
          className="career-menu-button"
          onClick={() =>
            setDisplayCareerSetting(
              (prevState) => (prevState = [false, true, false])
            )
          }
        >
          <p>Edit</p>
          <img src={EditIcon} alt="edit-career" aria-label="edit-career" />
        </section>
        <section
          className="career-menu-button"
          onClick={() =>
            setDisplayCareerSetting(
              (prevState) => (prevState = [false, false, true])
            )
          }
        >
          <p>Logbook</p>
          <img src={LogbookIcon} alt="logbook" aria-label="logbook" />
        </section>
      </aside>
      <main className="career-menu-main">
        {displayCareerSetting[1] ? (
          <CareerPage careerData={careerData.data} />
        ) : displayCareerSetting[0] ? (
          <CareerDispatch careerData={careerData.data} />
        ) : (
          <LogbookPage />
        )}
      </main>
    </div>
  );
};

export default CareerMenu;
