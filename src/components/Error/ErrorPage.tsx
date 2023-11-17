import NavBar from '../NavBar/NavBar';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="div-error">
      <NavBar />
      <h2 className="h2-error">
        Something went wrong. Please contact the administrator.
      </h2>
    </div>
  );
};

export default ErrorPage;
