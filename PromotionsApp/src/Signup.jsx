import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import "./signup-styles.css";
import flight from './assets/flight.jpeg';
import event from './assets/event.jpeg';
import movie from './assets/movie.jpeg';

export default function Signup() {
  const responseGoogle = (response) => {
    console.log(response);
    const token = response.credential;  // The token is now in the 'credential' field
    // Send token to backend for verification
    fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  const failureGoogle = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 text-center">
            <h1 className="title">Ti<span className='element--k'>k</span>ify<span className='ticket'> 🎫</span></h1>
            <h2 className="welcome--msg">Welcome to One Platform, Endless Possibilities👋</h2>
            <p className="information--msg">
              Join us and simplify your booking experience with access to everything in one place – from movies and events to flights, all at your fingertips.
            </p>
            <h2 className="mt-5">Sign Up Now and Experience the Future of Booking!</h2>

            <div className="social-login-buttons mt-4">
              <GoogleLogin
                onSuccess={responseGoogle}  // Success handler
                onError={failureGoogle}  // Error handler
              />
            </div>

            <p className="mt-4">or</p>

            <form className="mt-3">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up with Email
              </button>
            </form>

            <p className="mt-4">Already have an account?</p>
            <button className="btn btn-link">Log in here</button>
          </div>

          {/* Right Column with Carousel of Images */}
          <div className="col-lg-4 col-md-2 col-sm-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="100">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={flight} className="d-block w-100 carousel-image" alt="Flight" />
                </div>
                <div className="carousel-item">
                  <img src={event} className="d-block w-100 carousel-image" alt="Event" />
                </div>
                <div className="carousel-item">
                  <img src={movie} className="d-block w-100 carousel-image" alt="Movie" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
