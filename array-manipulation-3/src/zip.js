/* eslint-disable no-unused-vars */
function zip(first, second) {
  const result = [];
  first.forEach(x => {
    const array = [];
    array.push(x);
    result.push(array);
  });
  for (let i = 0; i < result.length; i++) {
    for (let x = 0; x < second.length; i++) {
      if (i === result.length) {
        return result;
      } else {
        result[i].push(second[i]);
      }
    }
  }
  return result;
}
