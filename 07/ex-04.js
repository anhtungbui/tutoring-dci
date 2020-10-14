/*
Is the Last Character an N?
source: edabit


Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

**Examples

isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true
*/

function isLastCharacterN(str) {
  const regex = /n$/;
  return regex.test(str);
}

console.log(isLastCharacterN('Aiden'));
console.log(isLastCharacterN('Piet'));
