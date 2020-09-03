/* eslint-disable no-console */
let counter = 3;
const intID = setInterval(function () {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log('Blastoff!');
    clear();
  }
}, 1000);

const clear = function () {
  clearInterval(intID);
};
