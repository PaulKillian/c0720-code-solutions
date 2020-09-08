/* eslint-disable no-unused-vars */
function truncate(length, string) {
  let newString = '';
  if (string.length === 0) {
    return '...';
  }
  for (let i = 0; i < string.length; i++) {
    newString += string[i];
    if (string.length === 12 && i === 11) {
      return newString + '...';
    } else if (i === length - 1) {
      return newString + '...';
    }
  }
}
