import React from 'react'
import './About.css'
import about from '../assets/about.jpg'
import Cont from '../contact/Cont'
const About = () => {
  return (
  <>
   <div className="about-page-container" id='About'>
        <h1>About Us</h1>
      <div className="about-page-content">
        <img src={about} alt="" className='about-img'/>
      
      </div>
      <h2>
      It is a revolutionary platform designed to cater to your immediate needs for various services. Whether you require an acting driver for a quick ride, a skilled mechanic to fix your vehicle, a knowledgeable teacher for instant tutoring, or a reliable caretaker to assist with your loved ones, our platform has you covered.</h2>
    </div>
    <Cont/>
  </>
  )
}

export default About