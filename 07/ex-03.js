/*
How Many Vowels?
source: edabit
https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

Create a function that takes a string and returns the number (count) of vowels contained within it.

**Examples

countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4

**Notes
a, e, i, o, u are considered vowels (not y).
*/

function countVowels(str) {
  const regex = /[aeiou]/gi;
  return str.match(regex).length;
}

console.log(countVowels('Celebration'));
console.log(countVowels('Palm'));
console.log(countVowels('Prediction'));
