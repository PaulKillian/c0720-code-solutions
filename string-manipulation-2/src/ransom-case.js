/* eslint-disable no-unused-vars */
function ransomCase(string) {
  const foo = string[0].toLowerCase();
  let baz = '';
  for (let i = 1; i < string.length; i++) {
    baz += string[i].toUpperCase();
    i++;
    if (string.length === i) {
      return foo + baz;
    }
    baz += string[i].toLowerCase();
  }
  return foo + baz;
}
