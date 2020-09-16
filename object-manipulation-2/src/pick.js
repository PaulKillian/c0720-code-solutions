/* eslint-disable no-unused-vars */
function pick(source, keys) {
  const picks = {};
  for (let i = 0; i < keys.length; i++) {
    for (const foo in source) {
      if (source[foo] !== undefined && foo === keys[i]) {
        picks[foo] = source[foo];
      }
    }
  }
  return picks;
}
