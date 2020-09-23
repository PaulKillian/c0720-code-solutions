/* eslint-disable no-unused-vars */
function difference(first, second) {
  const combined = first.concat(second);
  const dups = [];
  for (let i = 0; i < first.length; i++) {
    second.forEach(dup => {
      if (first[i] === dup) {
        dups.push(dup);
      }
    });
  }
  dups.forEach(dup => {
    for (let i = 0; i < combined.length; i++) {
      if (combined[i] === dup) {
        combined.splice(i, 1);
      }
    }
  });
  return combined;
}
