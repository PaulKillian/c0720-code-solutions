/* eslint-disable no-unused-vars */
function getWords(string) {
  let words = [];
  if (string === '') {
    words = [];
  } else {
    words = string.split(' ');
  }
  return words;
}
