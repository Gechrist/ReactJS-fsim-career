import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const navigate: NavigateFunction = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div className="container">
        <section
          className="img"
          aria-label="Background image of a landing plane"
        ></section>
        <section className="intro_login">
          <h1>FlightSim Career</h1>
          <p>Your one-stop service hub for a virtual flight career!</p>
          <button onClick={() => loginWithRedirect()}>Connect</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
