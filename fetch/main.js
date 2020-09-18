/* eslint-disable no-console */
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'get'
}).then(response => response.json())
  .then(data => {
    console.log(data);
  });
