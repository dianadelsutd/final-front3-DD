import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='logo-container'>
          <p>Powered by</p>
          <img src='../../public/images/DH.png' alt='DH-logo' />
        </div>

        <div className='social-icons'>
          <img src='../../public/images/ico-facebook.png' alt='' />
          <img src='../../public/images/ico-instagram.png' alt='' />
          <img src='../../public/images/ico-tiktok.png' alt='' />
          <img src='../../public/images/ico-whatsapp.png' alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
