/* 1.1 - Rewrite doubleOddNumbers using map, filter and =>

function doubleOddNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) { //filtering true or false
        newNumbers.push(numbers[i] * 2); //do something with it
      }
    }
    return newNumbers;

  const myNumbers = [1, 2, 3, 4];
  console.log(doubleOddNumbers(myNumbers)); */

////

'use strict';

function doubleOddNumbers(numbers) {
    let newNumbers = numbers.filter((number) => number % 2 !== 0).map((number) => number * 2);
    return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

module.exports = {
  myNumbers,
  doubleOddNumbers,
};
