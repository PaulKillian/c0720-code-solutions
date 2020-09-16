/* eslint-disable no-unused-vars */

const defaults = (target, source) => {
  const newTarget = target;
  for (const skey in source) {
    if (!target.skey === true) {
      newTarget[skey] = source[skey];
    }
  }
  return newTarget;
};

