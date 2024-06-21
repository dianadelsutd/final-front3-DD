import React from 'react';

const ButtonTheme = ({ toggleTheme }) => {
  return (
    <div className='nav-content'>
      {' '}
      <label className='switch'>
        <input type='checkbox' onChange={toggleTheme} />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default ButtonTheme;
