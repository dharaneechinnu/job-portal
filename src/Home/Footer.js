import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import social media icons
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social-icons">
     
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <span>© All Rights Reserved</span>
     
      </div>
    </>
  );
}

export default Footer;
