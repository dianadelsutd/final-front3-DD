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
      <div className='card-contact-container'>
        <div className='card-contact'>
          {dentist && (
            <>
              <img src='../../public/images/doctor.jpg' alt='' />
              <h1>{dentist.name}</h1>
              <p>Email: {dentist.email}</p>
              <p>Tel: {dentist.phone}</p>
              <p>Web: {dentist.website}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
