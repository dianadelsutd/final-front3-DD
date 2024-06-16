import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState();
  const [htmlContent, setHtmlContent] = useState('');
  const params = useParams();
  //console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentist(res.data);
    });
  }, []);

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        {dentist && (
          <>
            <h1>hola</h1>

            <h1>{dentist.name}</h1>
            <h1>{dentist.email}</h1>
            <h1>{dentist.phone}</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
