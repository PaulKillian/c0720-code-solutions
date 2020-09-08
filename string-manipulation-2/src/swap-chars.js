/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  const fIndex = string[firstIndex];
  const sIndex = string[secondIndex];
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newWord += sIndex;
    } else if (i === secondIndex) {
      newWord += fIndex;
    } else {
      newWord += string[i];
    }
  }
  return newWord;
}
