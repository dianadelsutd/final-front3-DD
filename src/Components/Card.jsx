import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';

const Card = ({ dentista, name, username }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className='card'>
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src='../../public/images/doctor.jpg' alt='' />
      <Link to={'/dentist/' + dentista.id}>{name}</Link>
      <p>
        <strong>{username}</strong>
      </p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className='favButton'>
        ⭐
      </button>
    </div>
  );
};

export default Card;
