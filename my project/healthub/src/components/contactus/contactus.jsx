import React from 'react';
import './contactus.css'; // Import your CSS file

function ContactUs() {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="info-item">
          <i className="fa fa-phone"></i>
          <p>Phone: 0348-9212950</p>
        </div>
        <div className="info-item">
          <i className="fa fa-envelope"></i>
          <p>Email: marifeen666@gmail.com</p>
        </div>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

function ContactUS() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default ContactUS;