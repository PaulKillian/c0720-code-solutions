/* eslint-disable no-unused-vars */
function union(first, second) {
  const combined = first.concat(second);
  const nonDups = [];
  combined.forEach(dup => {
    if (!nonDups.includes(dup)) {
      nonDups.push(dup);
    }
  });
  return nonDups;
}
