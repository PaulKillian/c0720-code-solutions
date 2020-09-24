/* eslint-disable no-unused-vars */
function flatten(array) {
  const result = [];
  let checkoutArray = null;
  for (let i = 0; i < array.length; i++) {
    checkoutArray = Array.isArray(array[i]);
    if (checkoutArray === false) {
      result.push(array[i]);
    }
    for (let x = 0; x < array[i].length; x++) {
      result.push(array[i][x]);
    }
  }
  return result;
}
