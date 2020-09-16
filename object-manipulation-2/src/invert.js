/* eslint-disable no-unused-vars */

function invert(source) {
  const picks = {};
  for (const foo in source) {
    picks[source[foo]] = foo;
  }
  return picks;
}

