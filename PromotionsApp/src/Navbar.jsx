import React from 'react';
import { Link } from 'react-router-dom';
import './navbar-styles.css'; // Make sure the custom CSS is imported

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="title">Ti<span className='element--k'>k</span>ify<span className='ticket'> 🎫</span></h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/promotions">Promotions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-movie">Book a Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-flight">Book a Flight</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-event">Book an Event</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
