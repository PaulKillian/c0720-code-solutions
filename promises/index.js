/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const result = takeAChance('Paul');

result.then(value => {
  console.log(value);
});

result.catch(error => {
  console.log(error);
});
