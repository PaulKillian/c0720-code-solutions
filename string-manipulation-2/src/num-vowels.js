/* eslint-disable no-unused-vars */

function numVowels(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
