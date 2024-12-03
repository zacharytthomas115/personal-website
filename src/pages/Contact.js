import React from 'react';
import './Contacts.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-info">
        <p>If you have any questions, feel free to reach out!</p>
        <a href="mailto:zacharytthomas98@gmail.com" className="contact-email">Email Me</a>
      </div>
      <div className="contact-info">
        <img src={require('../assets/me.png')} alt="Zachary" className="contact-image" />
      </div>
    </div>
  );
};

export default Contact;