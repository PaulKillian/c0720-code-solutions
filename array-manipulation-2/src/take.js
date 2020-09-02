/* eslint-disable no-unused-vars */
function take(array, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    if (array[i] === undefined) {
      return result;
    }
    result.push(array[i]);
  }
  return result;
}
