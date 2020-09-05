/*
Concatenating Two Integer Arrays
source: edabit

Create a function to concatenate two integer arrays.

** Examples

concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

*/

const arr1 = [1, 3, 5];
const arr2 = [2, 6, 8];

// Solution 1
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

// Solution 2: Using the spread operator
// Meaning: expanding a single varible into more
function concat2(arr1, arr2) {
  console.log([...arr1, ...arr2]);
}

concat(arr1, arr2);

// Solution 3
function concatV3(arr1, arr2) {
  // Copy arr1 and make a new array called joined and then work with it
  // We should not mutate the values inside arr1
  let joined = [...arr1];

  // For every elements of arr2, push it to the array 'joined'
  arr2.forEach((item) => {
    joined.push(item);
  });

  return joined;
}

console.log(concatV3(arr1, arr2));
