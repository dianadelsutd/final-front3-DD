import React from 'react';
import { useThemeContext } from '../Context/ThemeContext';

const Footer = () => {
  const { state, dispatch } = useThemeContext();
  return (
    <footer className={`footer ${state.theme}`}>
      <div className='footer-container'>
        <div className='logo-container'>
          <p>Powered by</p>
          <img src='../../public/images/DH.png' alt='DH-logo' />
        </div>

        <div className='social-icons'>
          <a href='https://www.facebook.com/DigitalHouseUruguay'>
            <img src='../../public/images/ico-facebook.png' alt='Facebook' />
          </a>
          <a href='https://www.instagram.com/_digitalhouse/?hl=es'>
            <img src='../../public/images/ico-instagram.png' alt='' />
          </a>
          <a href='https://www.tiktok.com/discover/digital-house'>
            <img src='../../public/images/ico-tiktok.png' alt='' />
          </a>
          <a href='https://www.whatsapp.com/?lang=es_LA'>
            <img src='../../public/images/ico-whatsapp.png' alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
