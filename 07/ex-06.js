/*
Find the Bomb
source: edabit
https://edabit.com/challenge/r4hycBjiBNMs6AAjq

Create a function that finds the word "bomb" in the given string. 
If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

**Examples

bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."

**Notes
"bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
*/

function bomb(str) {
  const regex = /bomb/gi;
  return regex.test(str) ? 'Duck!!!' : 'There is no bomb, relax.';
}

console.log(bomb('There is a bomb.'));
console.log(bomb('This goes boom!!!'));
