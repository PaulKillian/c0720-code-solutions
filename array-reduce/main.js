/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((addedNum, currentNum) => addedNum + currentNum, 0);
console.log('Sum:', sum);

const multipliedNums = numbers.reduce((allNums, currentNum) => allNums * currentNum, 1);
console.log('multipliedNums:', multipliedNums);

const isBalance = (addedAmount, currentAmount) => {
  if (currentAmount.type === 'deposit') {
    return addedAmount + currentAmount.amount;
  }
  return addedAmount - currentAmount.amount;
};

const balance = account.reduce(isBalance, 0);
console.log('balance', balance);

const composite = traits.reduce((addedProperties, currentProperty) => {
  return Object.assign(addedProperties, currentProperty);
}, {});
console.log('composite:', composite);
