import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

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
            <h1 className="welcome--msg">Welcome to One Platform, Endless Possibilities👋</h1>
            <p className="information--msg">
              Join us and simplify your booking experience with access to everything in one place – from movies and events to flights, all at your fingertips.
            </p>
            <ul className="list-unstyled mt-4">
              <li>✔️ Book movies, events, and flights with ease.</li>
              <li>✔️ Enjoy exclusive discounts and offers.</li>
              <li>✔️ Get personalized recommendations for your interests.</li>
              <li>✔️ Manage all your bookings in one place.</li>
            </ul>

            <h2 className="mt-5">Sign Up Now and Experience the Future of Booking!</h2>

            <div className="social-login-buttons mt-4">
              <GoogleLogin
                onSuccess={responseGoogle}  // Success handler
                onError={() => console.error('Login Failed')}
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
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
