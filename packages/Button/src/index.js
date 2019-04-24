import React from 'react';

const Button = ({ type = 'button', children, onClick }) => (
  <div>
    <button type={type} onClick={onClick}>
      This is button
    </button>
  </div>
);

export default Button;