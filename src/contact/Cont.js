// Cont.js

import React from 'react';
import Nav from '../Nav/Nav';
import './contact.css';
import contact from '../assets/contact.png'
import Footer from '../Home/Footer';
const Cont = ({ userName }) => {
  return (
    <>
     
      <div className="contact-page-container" id='Contact'>
      <h1>Contact Us</h1>
      <div className="contact-content">
        <img src={contact} alt="" />
       
      </div>
      <div className="contact-message">
       
        <p>If you have any questions or inquiries, feel free to contact us:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    
    </div>
    <Footer/>
    </>
  );
};

export default Cont;
