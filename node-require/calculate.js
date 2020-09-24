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
  console.log('Result:', add(integer1, integer2));
}

if (operator[0] === 'minus') {
  console.log('Result:', subtract(integer1, integer2));
}

if (operator[0] === 'times') {
  console.log('Result:', multiply(integer1, integer2));
}

if (operator[0] === 'over') {
  console.log('Result:', divide(integer1, integer2));
}
