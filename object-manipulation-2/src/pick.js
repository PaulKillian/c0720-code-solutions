/* eslint-disable no-unused-vars */
const pick = (source, keys) => {
  const newKeys = {};
  for (const keys in source) {
    if (source[keys] === keys) {
      newKeys[keys] = keys;
    }
  }
  return newKeys;
};
