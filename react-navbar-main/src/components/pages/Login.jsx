import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted!');
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="recover">
            <Link to="/forgot-password">Forgot password</Link>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="member">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;