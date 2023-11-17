import { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ message }: { message: string }) => {
  const [displayNotification, setDisplayNotification] =
    useState<boolean>(false);
  let hideDelay: any;

  useEffect(() => {
    if (message) {
      setDisplayNotification(true);
      hideNotification();
    }
    return () => clearTimeout(hideDelay);
  }, [message]);

  const hideNotification = () => {
    hideDelay = setTimeout(() => {
      setDisplayNotification(false);
    }, 5000);
  };

  return (
    <div
      className={`${
        displayNotification
          ? 'notification-wrapper_active'
          : 'notification-wrapper'
      }`}
    >
      <h3>{message}</h3>
    </div>
  );
};

export default Notification;
