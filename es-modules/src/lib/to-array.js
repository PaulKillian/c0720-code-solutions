// a function is being defined with the name "toArray" and it has 1 parameter, "value", then there is the opening
// curlybrace
function toArray(value) {
  // the isArray method of the Array object is being defined with one argument, the value stored in the variable named
  // "value"...
  return Array.isArray(value) ? value : [value];
}

// the value stored in "toArray" is being exported as a default
export default toArray;
