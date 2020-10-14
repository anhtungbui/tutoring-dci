/*
Letters Only
source: edabit 
https://edabit.com/challenge/GPKkNbytRpsAnHcrX

Write a function that removes any non-letters from a string, returning a well-known film title.

**Examples

lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

lettersOnly("^U)6$22>8p).") ➞ "Up"
*/

// Solution 1
function lettersOnly(str) {
  const regex = /[a-z]/gi;
  const letters = str.match(regex);
  return letters.join('');
}

// console.log(lettersOnly('R!=:~0o0./c&}9k`60=y'));

// Solution 2
function lettersOnlyV2(str) {
  const regex = /[^a-z]/gi;
  const result = str.replace(regex, '');
  return result;
}
