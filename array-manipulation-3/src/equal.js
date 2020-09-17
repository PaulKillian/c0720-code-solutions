/* eslint-disable no-unused-vars */
function equal(first, second) {
  let result = null;
  for (let i = 0; i < first.length; i++) {
    for (let x = 0; x < second.length; x++) {
      if (first[i] !== second[x]) {
        return false;
      } else {
        result = true;
        i++;
      }
    }
    return result;
  }
}
