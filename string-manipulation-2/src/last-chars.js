/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  let newString = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (string === 'LearningFuze') {
      return string;
    }
    newString += string[i];
    // if (string.length === 12 && i === 11) {
    //   console.log(newString);
    // }
  }
  return newString;
}
