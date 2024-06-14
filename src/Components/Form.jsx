import React, { useState } from 'react';
import Button from './Button';
import ErrorMsj from './ErrorMsj';
import OkMsj from './OkMsj';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [cliente, setCliente] = useState({
    nombre: '',
    email: '',
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setCliente({ ...cliente, nombre: event.target.value });
  const handleEmail = (event) =>
    setCliente({ ...cliente, email: event.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      cliente.nombre.trim().length > 5 &&
      cliente.nombre.trimStart() === cliente.nombre &&
      cliente.email.trim().length > 5 &&
      emailRegex.test(cliente.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }

    console.log('nombre al enviar:', cliente.nombre);
    console.log('email al enviar:', cliente.email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Ingresa tus datos</h3>
        <input
          type='text'
          placeholder='Ingresa tu nombre completo'
          onChange={handleName}
        />
        <input
          type='email'
          placeholder='Ingresa tu email '
          role='email'
          onChange={handleEmail}
        />
        <Button>Enviar</Button>
      </form>
      {show && <OkMsj nombre={cliente.nombre} />}
      {error && <ErrorMsj />}
    </>
  );
};

export default Form;
