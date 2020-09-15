import React from 'react';
import ReactDOM from 'react-dom';

const hello = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(hello, document.getElementById('root'));
