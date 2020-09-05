/*
Multiply Every Array Item by Two
source: edabit

Create a function that takes an array with numbers and return an array with the elements multiplied by two.

** Examples

getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

*/

let arr = [2, 5, 3];

// Solution 1: Using the forEach() method
// Remember that forEach cannot return a value;
function getMultipliedArr(arr) {
  let result = [];

  arr.forEach((element) => {
    result.push(element * 2);
  });

  return result;
}

// Variant 1B: use the for loop

// console.log(getMultipliedArr(arr));

// Solution 2: Using the map() method (rating: A)
function getMultipliedArrV2(arr) {
  return arr.map((element) => {
    // return element for new array, not the way forEach does with assigning new value
    return element * 2;
  });
}

// console.log(getMultipliedArrV2(arr));

// Solution 3: Using the for...of statement (rating: B)
function getMultipliedArrV3(arr) {
  let result = [];

  for (let element of arr) {
    result.push(element * 2);
  }

  return result;
}

// console.log(getMultipliedArrV3(arr));

// Solution 4: Using the for...in statement
function getMultipliedArrV4(arr) {
  for (let i in arr) {
    arr[i] *= 2;
  }
  return arr;
}

console.log(getMultipliedArrV4(arr));
