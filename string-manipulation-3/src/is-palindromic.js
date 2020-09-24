/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  const noSpaces = string.replace(/\s/g, '');
  let result = '';
  for (let i = noSpaces.length - 1; i >= 0; i--) {
    result += noSpaces[i];
  }
  if (noSpaces === result) {
    return true;
  } else {
    return false;
  }
}
