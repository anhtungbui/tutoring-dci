/*
Regex Series: Even Number?
source: edabit
https://edabit.com/challenge/pQh6uEM2Dp3BjAyzS

Write a regular expression that matches only an even number. Numbers will be presented as strings.

**Examples

"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true
*/

function isEvenNumber(num) {
  const regex = /[02468]$/;
  return regex.test(num);
}

console.log(isEvenNumber('2341'));
console.log(isEvenNumber('132'));
