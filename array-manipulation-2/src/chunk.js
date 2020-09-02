/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const result = [];
  const result2 = [];
  const finalResult = [];
  for (let i = 0; i < array.length - size; i++) {
    result.push(array[i]);
  } for (let x = size; x < array.length; x++) {
    result2.push(array[x]);
  }
  finalResult.push(result, result2);
  return finalResult;
}
