/* eslint-disable no-unused-vars */
function getValue(object, key) {
  let result = '';
  for (const key in object) {
    result = object[key];
  }
  return object[key];
}
