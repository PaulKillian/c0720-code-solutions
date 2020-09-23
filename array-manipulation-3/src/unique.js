/* eslint-disable no-unused-vars */
function unique(first, second) {
  const combined = first.concat(second);
  const nonDups = [];
  combined.forEach(dup => {
    if (!nonDups.includes(dup)) {
      nonDups.push(dup);
    }
  });
  return nonDups;
}
