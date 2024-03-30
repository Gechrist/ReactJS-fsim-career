import { NavigateFunction, useNavigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.css';

const NavBar = () => {
  const navigate: NavigateFunction = useNavigate();
  const { user, logout } = useAuth0();

  const queryClient = useQueryClient();

  return (
    <div className="navBar-wrapper">
      <Link className="careers-link" to="/dashboard">
        <h1>FlightSim Career</h1>
      </Link>
      <div id="links">
        <div className="user-menu">
          <Link className="careers-link welcome" to="/dashboard">
            Welcome{' '}
            {user?.nickname
              ? user!.nickname!.length > 16
                ? user!.nickname!.slice(0, 16)
                : user!.nickname
              : 'user'}
          </Link>
          <div className="user-menu-settings">
            <button
              onClick={() =>
                navigate('/dashboard/settings', {
                  state: { id: user?.sub?.slice(6) },
                })
              }
            >
              Settings
            </button>
            <button
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
                queryClient.invalidateQueries();
                localStorage.removeItem('cachedUserSettings');
              }}
            >
              LOG OUT
            </button>
          </div>
        </div>
        <button onClick={() => navigate('/faq')}>FAQ</button>
      </div>
    </div>
  );
};

export default NavBar;
