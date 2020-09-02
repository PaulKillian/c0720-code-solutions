/* eslint-disable no-unused-vars */
function includes(array, value) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result.push(value);
    }
  }
  if (result[0] === value) {
    return true;
  } else {
    return false;
  }
}
