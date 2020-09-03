/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const operator = [];

operator.push(process.argv[3]);

const integer1 = parseInt(process.argv[2]);
const integer2 = parseInt(process.argv[4]);

if (operator[0] === 'plus') {
  add(integer1, integer2);
}

if (operator[0] === 'minus') {
  subtract(integer1, integer2);
}

if (operator[0] === 'times') {
  multiply(integer1, integer2);
}

if (operator[0] === 'over') {
  divide(integer1, integer2);
}
