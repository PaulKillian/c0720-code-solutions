/* eslint-disable no-unused-vars */
function capitalize(word) {
  const upperCase = word.charAt(0).toUpperCase();
  const wordToLowerCase = word.substring(1);
  const lowerCase = wordToLowerCase.toLowerCase();
  return upperCase + lowerCase;
}
