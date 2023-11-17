import { useState } from 'react';
import deleteIcon from './red-x-icon.svg';
import airlinePilot from './airline-pilot.webp';
import cargoPilot from './cargo-pilot.webp';
import corporatePilot from './corporate-pilot.webp';
import DelModal from '../Modal/DelModal';
import './PilotCard.css';

const PilotCard = ({
  id,
  type,
  name,
  onClick,
  deleteCareer,
}: {
  id: string;
  type: string;
  name: string;
  onClick: () => void;
  deleteCareer: () => Promise<void>;
}) => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const displayModal = (arg: boolean) => setDeleteModal(arg);

  return (
    <div className="pilotcard-wrapper">
      {deleteModal && (
        <DelModal
          id={id}
          name={name}
          onClick={deleteCareer}
          displayModal={displayModal}
        />
      )}

      <div onClick={onClick}>
        <h4 className="type">
          {type == 'CORPORATE'
            ? 'Corporate Pilot'
            : type == 'AIRLINE'
            ? 'Airline Pilot'
            : 'Cargo Pilot'}
        </h4>
        <img
          src={
            type == 'CORPORATE'
              ? corporatePilot
              : type == 'AIRLINE'
              ? airlinePilot
              : cargoPilot
          }
          alt="pilot icon"
          aria-label="pilot-icon"
        />
        <h4>{name}</h4>
      </div>
      <img
        id="del-icon"
        src={deleteIcon}
        alt="delete career icon"
        aria-label="delete career"
        onClick={() => displayModal(true)}
      />
    </div>
  );
};

export default PilotCard;
