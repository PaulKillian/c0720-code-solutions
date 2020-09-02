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

const balance = account.reduce((addedAccounts, currentAccount) => addedAccounts + currentAccount.amount, 0);
console.log('Balance:', balance);

const isBalance = account.reduce(function (accumulator, currentValue) {
  if (currentValue.type === 'withdrawal') {
    console.log(accumulator);
    return accumulator + currentValue.amount;
  }
});

// const composite = traits.reduce((addedTrait, currentTrait) => {
//   addedTrait[currentTrait.name] = {type: currentTrait.type};
//   console.log('composite:', addedTrait);
