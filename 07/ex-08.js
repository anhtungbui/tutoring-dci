/*
Find Number of Digits in Number
source: edabit
https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

Create a function that will return an integer number containing the amount of digits in the given integer num.

**Examples
numOfDigits(1000) ➞ 4

numOfDigits(12) ➞ 2

numOfDigits(1305981031) ➞ 10

numOfDigits(0) ➞ 1

**Notes
Try to solve this challenge without using strings!
*/

function numOfDigits(num) {
  const regex = /\d/g;
  return num.toString().match(regex).length;
}

console.log(numOfDigits(1000));
console.log(numOfDigits(1305981031));
