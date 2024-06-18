import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('fav');
    if (storedFavs) {
      setFavList(JSON.parse(storedFavs));
    }
  }, []);

  const clearFavs = () => {
    localStorage.removeItem('fav');
    setFavList([]);
    console.log('Favoritos borrados');
  };

  return (
    <>
      <div className='contenedor-h1'>
        <h1>Dentistas Favoritos</h1>
        <button onClick={clearFavs} className='button'>
          Borrar todos los favoritos
        </button>
      </div>
      <div className='card-grid'>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favList.length > 0 ? (
          favList.map((dentista) => (
            <Card
              key={dentista.id}
              dentista={dentista}
              name={dentista.name}
              username={dentista.username}
              setFav={() => {}}
            />
          ))
        ) : (
          <p>No hay favoritos guardados.</p>
        )}
      </div>
    </>
  );
};

export default Favs;
