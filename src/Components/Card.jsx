import React from 'react';

const Card = ({ name, username }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className='card'>
      {/* En cada card deberan mostrar en name - username y el id */}
      <p>Nombre: {name}</p>
      <p>Username: {username}</p>
      <img src='../../public/images/doctor.jpg' alt='' />
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className='favButton'>
        Add fav
      </button>
    </div>
  );
};

export default Card;
