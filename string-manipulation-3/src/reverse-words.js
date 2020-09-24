/* eslint-disable no-unused-vars */
function reverseWords(string) {
  let result = '';
  let r = '';
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      r = string.slice(0, i);
    } else {
      result += string[i];
    }
  }
  const spaces = string.replace(/\s/g, ' ');
  if (string === result) {
    return true;
  } else {
    return false;
  }
}
