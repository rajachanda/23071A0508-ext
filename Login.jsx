import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="success-message">Successfully logged in! Redirecting...</div>
      ) : (
        <>
          <h1>Login</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
