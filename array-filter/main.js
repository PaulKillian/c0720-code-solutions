/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function evenNumbers(value) {
  for (let i = 0; i < numbers.length; i++) {
    if (value % 2 !== 0) return false;
  }
  return value;
}

const filteredIntegers = numbers.filter(evenNumbers);
console.log('filteredIntegers', filteredIntegers);

function overFive(value) {
  return value > 5;
}

const filteredNums = numbers.filter(overFive);
console.log('filteredNums', filteredNums);

function startWithE(value) {
  if (value.startsWith('E') === false) return false;
  return value;
}

const filteredNames = names.filter(startWithE);
console.log('filteredNames', filteredNames);

function haveD(value) {
  if (value.includes('D') === true) {
    return value;
  } if (value.includes('d') === true) {
    return value;
  }
}

const filteredNames2 = names.filter(haveD);
console.log('filteredNames2', filteredNames2);
