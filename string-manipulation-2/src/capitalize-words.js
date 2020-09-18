/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  let foo = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      foo += string[i].toUpperCase();
    } else if (i !== 0) {
      foo += string[i].toLowerCase();
    } if (string[i] === ' ') {
      i++;
      foo += string[i].toUpperCase();
    }
  }
  return foo;
}
