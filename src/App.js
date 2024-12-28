import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Fragment } from 'react';

import jokerImage from './resources/joker.jpg';

// Dynamically import all images from the resources folder
const images = require.context('./resources', false, /\.(jpg|jpeg|png|gif)$/);

// Assign all images to an array
const imageArray = images.keys().map(image => images(image));

/**cards without anchor */
const myArr = Array.from({ length: 16 }, (_, i) => i + 1);

function App() {
  return (
    <Fragment>
      <div className="container-fluid pt-5 p-5 bg-passive" style={{ backgroundColor: '#212121' }} />
      <div className="container-fluid p-3 bg-dark text-white text-center">
        <h1
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Choose Your Favorite Movie
        </h1>
      </div>

      <nav className="navbar bg-dark border-bottom pt-0 pb-4 d-block" data-bs-theme="dark">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search movie"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container-fluid bg-dark pt-4 pb-3">
        <div className="row g-3">
          {myArr.map((value, index) => (
            <div key={index} className="col-3">
              <div
                className="card bg-secondary text-white rounded-4 d-flex align-items-center justify-content-center"
                style={{ height: '350px', borderRadius: '15px' }} // Set a fixed height for the card
              >
                <img
                  src={imageArray[index]}
                  alt={`Card ${value}`}
                  className="card-img-top pb-0 pt-0 "
                  style={{
                    width: '100%',  // Ensure the image stretches to fill the container width
                    height: '200px', // Fixed height for the image
                    objectFit: 'cover', // Ensure the image covers the area without distortion
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card {value}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
