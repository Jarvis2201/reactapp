import React from 'react';
import './signup.css'
function SignupPage() {
  return (
    <div className="container">
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" placeholder="Enter your first name" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Enter your last name" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" placeholder="Enter your address" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" placeholder="Enter your phone number" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
        </div>
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}

export default SignupPage;