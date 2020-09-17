/* eslint-disable no-unused-vars */
function unique(array) {
  const result = [];
  const compare = [];
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    compare.push(array[i]);
  }
  for (let x = 0; x < array.length; x++) {
    for (let c = 1; c < compare.length; c++) {
      if (array[x] === compare[c]) {
        duplicates.push(array[x]);
      } else {
        result.push(array[x]);
        c += c.length;
      }
    }
  }
}
