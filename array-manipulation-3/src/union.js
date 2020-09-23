/* eslint-disable no-unused-vars */
function union(first, second) {
  const firstCopy = first.slice();
  const secondCopy = second.slice();
  const combined = firstCopy.concat(secondCopy);
  const dups = [];
  for (let i = 0; i < first.length; i++) {
    combined.forEach(dup => {
      if (first[i] === dup) {
        dups.push(dup);
        combined.splice(i, 1);
      }
    });
  }
}
