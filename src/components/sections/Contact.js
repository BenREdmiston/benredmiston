import React from 'react';
import '../../styles/sections/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: benjammin@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/benjammin" target="_blank" rel="noopener noreferrer">linkedin.com/in/benjammin</a></p>
      <p>GitHub: <a href="https://github.com/benjammin" target="_blank" rel="noopener noreferrer">github.com/benjammin</a></p>
    </div>
  );
}

export default Contact;