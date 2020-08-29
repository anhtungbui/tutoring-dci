/*
Write a program to get the first and the last element of an array

** Example
getFirstElem([3, 8, 9, 30]) => Output: 3
getLastElem([3, 8, 9, 30]) => Output: 30
*/

const arr = [3, 8, 9, 30, 7, 9];

// Solution 1
function getFirstElem(arr) {
  return arr[0];
}
function getLastElem(arr) {
  return arr[arr.length - 1];
}

// Test
console.log(getFirstElem(arr));
console.log(getLastElem(arr));

// Solution 2: Using array destructuring syntax
function getFirstElemV2(arr) {
  const [first] = arr;
  return first;
}
// This sucks if the array is long
// Not recommended
function getLastElemV2(arr) {
  const [, , , , , last] = arr;
  return last;
}

// Test
console.log(getFirstElemV2(arr));
console.log(getLastElemV2(arr));
