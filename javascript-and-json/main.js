/* eslint-disable no-console */
const books = [
  {
    isbn: 1292,
    title: 'Adventure',
    author: 'Adventurous Smith'
  },
  {
    isbn: 2927,
    title: 'Crime',
    author: 'Criminal Smith'
  },
  {
    isbn: 9376,
    title: 'Drama',
    author: 'Drama Smith'
  }
];

const serialize = JSON.stringify(books);

console.log(JSON.stringify(books));

console.log(typeof serialize);

const student = '{"Number ID":1234, "String Name": "student1"}';

const deserialize = JSON.parse(student);

console.log(JSON.parse(student));

console.log(typeof deserialize);
