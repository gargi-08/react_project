import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us through the following contact details.
        </p>
      </div>

      <div className="contact-card">

        <h2> Address</h2>
        <p>Bhopal, Madhya Pradesh, India</p>

        <h2> Phone</h2>
        <p>+91 9876543210</p>

        <h2> Email</h2>
        <p>launchworks@gmail.com</p>

        <h2> Website</h2>
        <p>www.launchworks.com</p>

        <h2> Working Hours</h2>
        <p>Monday - Friday : 9:00 AM - 6:00 PM</p>

      </div>
    <br></br>
    <br></br>
    <br></br>
    </div>

  );
};

export default Contact;