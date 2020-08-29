/*
Write a program to calculate a sum of three numbers FROM AN ARRAY.

** Example
arr = [1, 9, 10]

sumThreeNums(arr) => 20

*/

const arr1 = [1, 9, 10];

// Solution 1:
function sumThreeNums(arr) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  // Or with a regular for loop but try to use forEach more often;

  return sum;
}

console.log(sumThreeNums(arr1));

// Solution 2:
function sumThreeNumsV2(arr) {
  let sum = 0;

  // Alternative: Using the for...of statement
  // for (let value of arr) {
  //   sum += value;
  // }

  for (let i in arr) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumThreeNumsV2(arr1));
console.log('-------');

// Solution 3:
function sumThreeNumsV3(arr) {
  return arr.reduce((accumulator, value) => {
    return accumulator + value;
  });
}

console.log(sumThreeNumsV3(arr1));
