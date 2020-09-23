/* eslint-disable no-unused-vars */
function unique(array) {
  const nonDups = [];
  array.forEach(dup => {
    if (!nonDups.includes(dup)) {
      nonDups.push(dup);
    }
  });
  return nonDups;
}
