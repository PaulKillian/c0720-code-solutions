/* eslint-disable no-unused-vars */
function drop(array, count) {
  const result = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] === undefined) {
      return result;
    }
    result.push(array[i]);
  }
  return result;
}
