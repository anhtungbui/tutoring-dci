/*
Convert an Array to a String
source: edabit

Create a function that takes an array of numbers or letters and returns a string.

** Examples

arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA" 
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

function arrayToString(arr) {
  return arr.join(''); // Output: abcdef
}

console.log(arrayToString(arr2));

// 2nd Solution using the forEach method
function arrayToStringV2(arr) {
  let result = '';
  arr.forEach((elem) => {
    result += elem;
  });
  return result;
}
console.log(arrayToStringV2(arr2));

// With arrow function expression
const joined = (arr) => arr.join('');

console.log(joined(arr1));
