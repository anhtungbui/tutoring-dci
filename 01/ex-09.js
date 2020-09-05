/*
Find the biggest and smallest number from an array using different methods.

** Example
findMax([2, 3, -8, 9]) => 9 
findMin([2, 3, -8, 9]) => -8
*/

let arr = [1, 3, 10, 8];

// Method 1: Using the Math.max() method
function findMax(arr) {
  //return Math.max(arr[0], arr[1], arr[2]);
  return Math.max(...arr);
}

console.log(findMax(arr));

// Method 2: Using an algorithm
function findMax2(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      max = arr[i + 1];
    }
  }

  return max;
}

console.log(findMax2(arr));

// Method 3
function findMaxV3(arr) {
  arr.sort((a, b) => a - b); // Incremental sorting

  return arr[arr.length - 1];
}
//console.log(findMaxV3(arr));
