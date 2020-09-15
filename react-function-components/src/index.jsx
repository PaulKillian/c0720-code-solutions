import React from 'react';
import ReactDom from 'react-dom';

const CustomButton = props => {
  return <button>Click Me!</button>;
};

const rootDiv = document.querySelector('#root');

ReactDom.render(
  CustomButton(),
  rootDiv
);
