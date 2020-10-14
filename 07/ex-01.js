/*
Regex Series: String Contains at Least One Digit
Source: edabit
https://edabit.com/challenge/wBAuop24JYt9MZhXF

Write a regular expression that matches a string if it contains at least one digit.

** Examples

"c8" ➞ true

"23cc4" ➞ true

"abwekz" ➞ false

"sdfkxi" ➞ false
*/

function hasOneDigit(str) {
  const regex = /[0-9]/;
  // Equivalent to
  // const regex = /\d/;
  return regex.test(str);
}

console.log(hasOneDigit('c8'));
console.log(hasOneDigit('23cc4'));
console.log(hasOneDigit('abwekz'));
