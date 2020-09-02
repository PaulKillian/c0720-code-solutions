/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const multiplyByTwo = numbers.map(num => num * 2);
console.log('multiplyByTwo:', multiplyByTwo);

const priceFormat = numbers.map(price => `$${price}.00`);
console.log('priceFormat', priceFormat);

const upperCase = languages.map(upper => upper.toUpperCase());
console.log('upperCase', upperCase);

const firstLetter = languages.map(first => first[0][0]);
console.log('firstLetter', firstLetter);
