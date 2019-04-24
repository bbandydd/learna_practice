import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '../../../Button';

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Hello, I`m ReactMaker.</h2>
      <p>To get started, edit containers/index.js</p>
      <Button>132465</Button>
    </div>
  );
};

export default hot(Main);
