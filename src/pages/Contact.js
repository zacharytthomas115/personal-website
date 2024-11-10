import React from 'react';
import './Contacts.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <img src="your-image-url.jpg" alt="Your Name" className="contact-image" />
      </div>
      <div className="contact-info">
        <p>If you have any questions, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" className="contact-email">Email Me</a>
      </div>
    </div>
  );
};

export default Contact;