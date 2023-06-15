import React from 'react';
import Logo from '../images/LOGO.svg';
import '../styles/footer.css';

const Footer = () => {
    return (
      <div className='footer-container'>
            <span className='footer-logo'>
              <img className='letter-logo' src={Logo} alt="Logo" aria-label='Logo' />
            </span>
        <p className='legals'>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  };
  
  export default Footer;
  