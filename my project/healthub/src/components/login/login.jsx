import React from 'react';
import './login.css'
function LoginPage() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <input type="submit" value="Login" />
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;