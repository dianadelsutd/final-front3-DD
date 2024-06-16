import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from './utils/routes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div class='logo'>
          <Link to={routes.inicio} className='logo-hover'>
            {' '}
            <span style={{ fontWeight: 'bold', color: '#334e6c' }}>D</span>H
            Odonto{' '}
          </Link>
        </div>

        <div className='nav-content'>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          <Link to={routes.inicio}>
            <h4>Home</h4>
          </Link>
          <Link to={routes.contacto}>
            <h4>Contacto</h4>
          </Link>
          <Link to={routes.destacados}>
            <h4>Favoritos</h4>
          </Link>
          <button>Change theme</button>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </div>
    </nav>
  );
};

export default Navbar;
