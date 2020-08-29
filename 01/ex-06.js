/*
Check whether a number is odd or even.

** Example
isOddEven(2) => 'Even'
isOddEven(9) => 'Odd'
*/

// Solution 1
function isOddEven(num) {
  if (num % 2 === 0) return 'Even';
  else return 'Odd';
}

console.log(isOddEven(2));
console.log(isOddEven(9));

// Solution 2
function isOddEvenV2(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isOddEvenV2(2));
console.log(isOddEvenV2(9));

// Solution 3
const isOddEvenV3 = (num) => (num % 2 === 0 ? 'Even' : 'Odd');

console.log(isOddEvenV3(2));
console.log(isOddEvenV3(9));
