/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  let letterCheck = '';
  for (let i = 0; i < word.length; i++) {
    letterCheck += word[i].toUpperCase();
  }
  if (letterCheck[0] === word[0] && letterCheck[1] === word[1]) {
    return true;
  } if (letterCheck[0] !== word[0]) {
    return false;
  } else if (letterCheck[0] === word[0] && letterCheck[1] !== word[1]) {
    return false;
  }
}
