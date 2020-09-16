/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  const newTarget = target;
  const compareKeys = Object.keys(target);
  if (compareKeys.length === 0) {
    for (const skey in source) {
      newTarget[skey] = source[skey];
    }
  } else if (compareKeys.length !== 0) {
    for (let i = 0; i < compareKeys.length; i++) {
      for (const skey in source) {
        if (compareKeys[i] === skey) {
          newTarget[compareKeys[i]] = target[compareKeys[i]];
          i++;
        } else {
          newTarget[skey] = source[skey];
        }
      }
    }
  }
  return newTarget;
};
