/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  const foo = word[0].toUpperCase();
  let baz = '';
  for (let i = 1; i < word.length; i++) {
    if (word[i] === 'S' || word[i] === 's') {
      baz += word[i].toUpperCase();
      i++;
    }
    baz += word[i].toLowerCase();
  }
  return `${foo}${baz}`;
}
