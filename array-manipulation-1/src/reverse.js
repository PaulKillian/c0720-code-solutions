/* eslint-disable no-unused-vars *///
function reverse(array) {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
