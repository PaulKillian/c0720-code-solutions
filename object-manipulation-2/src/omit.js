/* eslint-disable no-unused-vars */

function omit(source, keys) {
  const omits = {};
  for (let i = 0; i < keys.length; i++) {
    for (const foo in source) {
      if (foo !== keys[i]) {
        omits[foo] = source[foo];
        i++;
      }
    }
  }
  return omits;
}

