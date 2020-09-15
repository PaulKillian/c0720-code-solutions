// the value stored in toArray is being imported from the to-array directory
import toArray from './to-array';

// a function is being defined with the name "createElement" and it has 3 parameter tagName, attributes, and empty array
// literal being assigned to the parameter children, then there is the opening
// curlybrace
function createElement(tagName, attributes, children = []) {
  // the createElement of the document object is being called with 1 arguments, tagName and the returned value
  // is being assigned to the constant variable named parent
  const parent = document.createElement(tagName);
  // there is a for in loop for the constant variable named name in the property attributes of an object
  for (const name in attributes) {
    // the setAttribute method of the parent object is beig called with 2 argumentss, the value stored in the variable
    // named "name", the properties "name" of the attributes object
    parent.setAttribute(name, attributes[name]);
  }
  // the forEach method of the toArray function with the arguments "children", is being called with 1 arguments, the arrow
  // function named "child"
  toArray(children).forEach(child => {
    // there is an if statement evaluating whether or not the child instance of HTMLElement is falsy
    if (!(child instanceof HTMLElement)) {
      // if it evaluates to falsy the createTextNode methd of the document object is called with 1 argument, child,
      // and the return value is assigned to the variable named child
      child = document.createTextNode(child);
    }
    // the appendChild method of the parent object is being called with 1 argument, child
    parent.appendChild(child);
  });
  // the value in the variable parent is being returned
  return parent;
}

// the value stored in "createElement" is being exported as a default
export default createElement;
