import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useThemeContext } from '../Context/ThemeContext';
import ButtonTheme from './ButtonTheme';

const Navbar = () => {
  const { state, dispatch } = useThemeContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`nav ${state.theme}`}>
      <div className='nav-container'>
        <div className='logo'>
          <Link to={routes.inicio} className='logo-hover'>
            {' '}
            <span style={{ fontWeight: 'bold', color: '#334e6c' }}>D</span>H
            Odonto{' '}
          </Link>
        </div>

        <div className={`nav-content ${state.theme}`}>
          <Link to={routes.inicio}>
            <h4>Home</h4>
          </Link>
          <Link to={routes.contacto}>
            <h4>Contacto</h4>
          </Link>
          <Link to={routes.destacados}>
            <h4>Favoritos</h4>
          </Link>
          <ButtonTheme toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
