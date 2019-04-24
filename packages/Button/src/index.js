import React from 'react';

const Button = ({ type = 'button', children, onClick }) => (
  <div>
    <button type={type} onClick={onClick}>
      { children }
    </button>
  </div>
);

export default Button;