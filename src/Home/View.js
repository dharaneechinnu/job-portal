import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import './View.css';
import About from './About';
import Loader from '../Loader/Loader'; // Import the Loader component

const View = () => {
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Simulate data loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 2000ms (adjust as needed)
    }, 2000); // Adjust delay time as needed

    // Cleanup function to clear timeout if component unmounts before timeout completes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Display loading component while loading */}
      {loading ? (
        <Loader />
      ) : (
        <div className="home-page">
          <Nav />
          <div className="content-page">
            <div className="main-page">
              <h2>Welcome to Insta Serve</h2>
              <h2>Your Instant Solution Hub</h2>
              <h2>Connecting You with Trusted Drivers,<br />Mechanics, Teachers, and <br />Caretakers Online!</h2>
              <button type="submit" className='btn-app'><Link to="/job" style={{ color: 'inherit', textDecoration: 'inherit' }}>View</Link> </button>
              <button type="submit" className='btn-app'><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>Add Your Job</Link> </button>
            </div>
            <div className="img-container">
              <span className='circle'></span>
            </div>
          </div>
          <About />
        </div>
       
      )}
      
    </>
  );
}

export default View;
