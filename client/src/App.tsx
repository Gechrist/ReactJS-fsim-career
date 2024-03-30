import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const { loginWithRedirect } = useAuth0();

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
          <ul>
            <li>Create careers</li>
            <li>Get dispatches</li>
            <li>Log your flight hours</li>
            <li>Track your progress automatically</li>
          </ul>
          <button onClick={() => loginWithRedirect()}>Connect</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
