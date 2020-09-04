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

console.log(JSON.stringify(books));

console.log(typeof books);

const student = '{"Number ID":1234, "String Name": "student1"}';

console.log(JSON.parse(student));

console.log(typeof student);
