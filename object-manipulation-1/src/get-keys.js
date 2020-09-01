/* eslint-disable no-unused-vars */
function getKeys(object, key) {
  const result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
