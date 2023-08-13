import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer-padding'>
     <div className='footer-heading'>
      <h1> Do you want to step in to the future before others </h1>
     </div>

    <div className='footer-btn'>
      <p> Request Early Access </p>
    </div>

    <div className='footer-links'>
      <div className='footer-logo'>
        <img src={gpt3Logo} alt='logo' />
        <p> Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved </p>
      </div>

     <div className='footer-link-Div'>
      <div className='footer-link-div'>
       <h4>Links</h4>
       <p>Overons</p>
       <p>Social Media</p>
       <p>Counters</p>
       <p>Contact</p>
      </div>

      <div className='footer-link-div2'>
       <h4>Company</h4>
       <p>Terms & Conditions</p>
       <p>Privacy Policy</p>
       <p>Contact</p>
      </div>

      <div className='footer-link-div3'>
       <h4>Get in touch</h4>
       <p>Crechterwoord K12 182 DK Alknjkcb</p>
       <p>085-132567</p>
       <p>baraakhaldi77@gmail.com</p>
      </div>
      </div>

      <div className='footer-copyright'>
       <p>© 2023 Baraa Khaldi All rights reserved.</p>
      </div>
      
     </div>
    </div>
  )
}

export default Footer;