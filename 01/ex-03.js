/*
Create a function that returns true if a string is empty and false otherwise.

** Example

isEmpty('abc') => false

isEmpty('') => true
*/

const str1 = 'abc';
const str2 = '';

// Solution 1
function isEmpty(string) {
  return string === '';
}

// TEST
console.log(isEmpty(str1));
console.log(isEmpty(str2));

// For Samuel
function isEmptyV2(string) {
  if (string === '') console.log('This is empty');
  else console.log('this is a non-empty string');
}

isEmptyV2('abc');
isEmptyV2('');

// Solution 2
function isEmptyV3(string) {
  return string.length === 0;
}

console.log(isEmptyV3(str1));
console.log(isEmptyV3(str2));
