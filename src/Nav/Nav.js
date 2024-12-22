import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/lo.png';
import './Nav.css';

const Nav = () => {
  const [color, setColor] = useState(false);
  const history = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    history('/');
  };

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    // Cleanup function to remove the event listener when component unmounts
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className="logo">
        <img src={logo} alt="" />
        <h2>Insta Serve</h2>
      </div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact us</a></li>
        <li><a onClick={handlelogout}>Logout</a></li>
      </ul>
    </div>
  );
};

export default Nav;
