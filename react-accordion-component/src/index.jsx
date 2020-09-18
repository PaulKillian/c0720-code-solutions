import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion.jsx';

const topics = [
  {
    html: 'Hypertext Markup Language(HTML) is the standard marku lnguage for creating web pages and web applications. With Cascading Style Sheets(CSS) an Javascript, it forms a triad of cornerstone technologis for the World Wide Web.',
    css: 'Cascading Style Sheets (CSS) is a style sheet language used for describing a presentation of a document written in a markup like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and Javascript.',
    js: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

ReactDOM.render(
  <Accordion topics={topics} />,
  document.getElementById('root')
);
