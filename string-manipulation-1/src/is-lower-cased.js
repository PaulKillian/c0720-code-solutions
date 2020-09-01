/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  let letterCheck = '';
  for (let i = 0; i < word.length; i++) {
    letterCheck += word[i].toLowerCase();
  }
  if (letterCheck[0] === word[0] && letterCheck[1] === word[1]) {
    return true;
  } if (letterCheck[0] !== word[0]) {
    return false;
  } else if (letterCheck[0] === word[0] && letterCheck[1] !== word[1]) {
    return false;
  }
}
