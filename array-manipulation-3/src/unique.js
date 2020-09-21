/* eslint-disable no-unused-vars */
function unique(array) {
  const result = [];
  const compare = [];
  const duplicates = [];
  for (let c = 0; c < array.length; c++) {
    for (let x = 1; x < array.length; x++) {
      if (c === x) {
        duplicates.push(array[c]);
        x++;
      }
      if (array[c] !== array.length - 1) {
        result.push(array[c]);
        x++;
      } else if (array[c] === array[x]) {
        compare.push(array[c]);
      }
    }
  }
}
