/* eslint-disable no-unused-vars */
function zip(first, second) {
  const result = [[]];
  for (let i = 0; i < result.length; i++) {
    first.forEach(x => {
      result[i].push(x);
      const array = [];
      result[i].push(array);
    });
  }
  for (let i = 0; i < result.length; i++) {
    second.forEach(x => {
      result[i].push(x);
    });
  }
}
