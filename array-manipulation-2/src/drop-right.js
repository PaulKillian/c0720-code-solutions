/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  const result = [];
  for (let i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
