/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const result = [];
  const result2 = [];
  const finalResult = [];
  for (let i = 0; i < size; i++) {
    for (let x = 0; x < result2.length; x++) {
      result2[x] = array[i];
    }
  }

  // for (let x = size; x < array.length; x++) { result2.push(array[x]); }
  finalResult.push(result);
  return finalResult;
}
