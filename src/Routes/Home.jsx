import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [fav, setFav] = useState([]);
  const [dentists, setDentists] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // Cargar los favoritos desde localStorage cuando el componente se monta (sacado de int)
    const storedFavs = localStorage.getItem('fav');
    if (storedFavs) {
      setFav(JSON.parse(storedFavs));
    }

    //esto ya estaba
    axios(url)
      .then((res) => setDentists(res.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //console.log(dentists);

  useEffect(() => {
    // Guardar los favoritos en localStorage cada vez que fav cambia (sacado de int)
    localStorage.setItem('fav', JSON.stringify(fav));
  }, [fav]);

  return (
    <main className=''>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            dentista={dentist}
            name={dentist.name}
            username={dentist.username}
            setFav={setFav}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
