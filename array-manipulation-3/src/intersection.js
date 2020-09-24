/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const combined = first.concat(second);
  const dups = [];
  for (let i = 0; i < first.length; i++) {
    second.forEach(dup => {
      if (first[i] === dup) {
        dups.push(dup);
      }
    });
  }
  return dups;
}
