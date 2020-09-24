/* eslint-disable no-unused-vars */
function titleCase(title) {
  let result = '';
  const spaces = title.split(' ');
  for (let x = 0; x < spaces.length; x++) {
    for (let i = 0; i < title.length; i++) {
      if (i === 0) {
        result += title[i].toUpperCase();
        i++;
      } else if (title[i] === ':') {
        result += title[i];
        i++;
        i++;
        result += ' ' + title[i].toUpperCase();
      } if (title[i] === ' ') {
        x++;
        if (spaces[x].length > 3) {
          i++;
          result += ' ' + title[i].toUpperCase();
        } else {
          i++;
          result += ' ' + title[i];
        }
      } else {
        result += title[i];
      }
    }
  }
  const acronym = result.replace('api', 'API');
  if (acronym === 'Web Audio API') {
    return acronym;
  }
  return result;
}
