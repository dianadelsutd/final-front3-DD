import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
      .then((res) => setDentists(res.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(dentists);

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
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
