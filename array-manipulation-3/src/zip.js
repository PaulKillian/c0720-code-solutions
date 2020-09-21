/* eslint-disable no-unused-vars */
function zip(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let x = 0; x < second.length; x++) {
      result.push([]);
      for (let c = 0; c < result.length; c++) {
        if (first.length > second.length && i === first.length - 1) { return result; }
        if (result[i] === undefined) { return result; }
        result[i].push(first[i]);
        result[i].push(second[x]);
        i++;
        c++;
      }
    }
  }
  return result;
}
