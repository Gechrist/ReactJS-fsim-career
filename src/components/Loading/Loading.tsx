import loading from './loading.webp';
import './Loading.css';

function Loading() {
  return (
    <div className="loading">
      <img
        src={loading}
        alt="loading placeholder image"
        aria-label="loading image"
      />
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;
