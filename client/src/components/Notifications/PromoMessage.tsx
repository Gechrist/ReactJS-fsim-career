import { useEffect, useState } from 'react';
import fO from './fo.webp';
import sO from './so.webp';
import pC from './pc.webp';
import cPT from './cpt.webp';
import tRCPT from './trcpt.webp';
import './PromoMessage.css';

const PromoMessage = ({
  promoMessage,
  promoImage,
}: {
  promoMessage: string;
  promoImage?: string;
}) => {
  const [displayPromoMessage, setDisplayPromoMessage] =
    useState<boolean>(false);
  let initialDelay: any;
  let hideDelay: any;

  useEffect(() => {
    if (promoMessage) {
      initialDelay = setTimeout(() => {
        setDisplayPromoMessage(true);
        hidePromoMessage();
      }, 7000);
    }
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(hideDelay);
    };
  }, [promoMessage]);

  const hidePromoMessage = () => {
    hideDelay = setTimeout(() => {
      setDisplayPromoMessage(false);
    }, 5000);
  };

  return (
    <div
      className={`${
        displayPromoMessage
          ? 'promomessage-wrapper_active'
          : 'promomessage-wrapper'
      }`}
    >
      <div>
        <h3 id="promo-heading">{promoMessage} </h3>
        <img
          src={
            promoImage == 'PILOTCADET'
              ? pC
              : promoImage == 'SECONDOFFICER'
              ? sO
              : promoImage == 'FIRSTOFFICER'
              ? fO
              : promoImage == 'CAPTAIN'
              ? cPT
              : tRCPT
          }
          aria-label="pilot rank"
          alt="pilot rank promoImages"
          id="promo-image"
        />
      </div>
    </div>
  );
};

export default PromoMessage;
