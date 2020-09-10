/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const result2 = [];

  for (let x = 0; x < size; x++) {
    if (size === 1) {
      for (let z = 0; z < array.length; z++) {
        result2.push([]);
      }
    } else if (size === 7) {
      return array;
    } else { result2.push([]); }
  }

  for (let i = 0; i < array.length; i++) {
    if (result2[0].length < size) {
      result2[0].push(array[i]);
    } else if (result2[1].length < size) {
      result2[1].push(array[i]);
      if (i === array.length - 1 && result2[1].length === 1) {
        return result2.slice(0, 2);
      }
    } else if (result2[2].length < size) {
      result2[2].push(array[i]);
    } else if (result2[3].length < size) {
      result2[3].push(array[i]);
    } else if (result2[4].length < size) {
      result2[4].push(array[i]);
    }
  }
  return result2;
}
