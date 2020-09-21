/* eslint-disable no-unused-vars */
function difference(first, second) {
  const result = first.concat(second);
  const n = result.filter((a, b) => result.indexOf(a) !== b);
  const f = result.filter((a, b) => result.indexOf(a) === b);
  return f;
}
