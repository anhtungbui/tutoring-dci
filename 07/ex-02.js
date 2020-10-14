/*
Find the Amount of Potatoes
Source: edabit
https://edabit.com/challenge/u6iaymtE4eYXQ2ZWR

Create a function to return the amount of potatoes there are in a string.

** Examples

countPotatoes("potato") ➞ 1

countPotatoes("potatopotato") ➞ 2

countPotatoes("potatoapple") ➞ 1
*/

function countPotatoes(str) {
  const regex = /potato/g;
  return str.match(regex).length;
}

console.log(countPotatoes('potato'));
console.log(countPotatoes('potatopotato'));
console.log(countPotatoes('potatoapple'));
