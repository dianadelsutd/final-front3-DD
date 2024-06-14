import React from 'react';
import Button from './Button';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <>
      <form>
        <h3>Ingresa tus datos</h3>
        <input type='text' placeholder='Ingresa tu nombre completo' />
        <input type='email' placeholder='Ingresa tu email ' role='email' />
        <Button>Enviar</Button>
      </form>
    </>
  );
};

export default Form;
