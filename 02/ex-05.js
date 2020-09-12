/*
Maximum Difference
source: edabit

Given an array of integers, return the difference between the largest and smallest integers in the array.

** Examples

difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18

difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// 15 - (-9) = 24

difference([4, 17, 12, 2, 10, 2]) ➞ 15
*/
const arr1 = [10, 15, 20, 2, 10, 6];
const arr2 = [-3, 4, -9, -1, -2, 15];

// Solution 1
function difference(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
}

// console.log(difference(arr1));
// console.log(difference(arr2));

// Solution 2
function differenceV2(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

console.log(differenceV2(arr1));
console.log(differenceV2(arr2));
