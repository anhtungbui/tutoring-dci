/*
Check whether an array has certain value.

** Example
arr = [1, 3, 5, 7]

isFoundArr(arr, 6) => false

isFoundArr(arr, 7) => true
*/
const arr = [1, 3, 5, 7];

// Solution 1: Using the forEach or for loop
function isFoundArr(arr, searchValue) {
  let result = false;

  // Fell free to choose either of them, but try to learn both and use more forEach method

  arr.forEach((num) => {
    if (num === searchValue) result = true;
  });

  /*
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) result = true;
  }
  */
  return result;
}
// Test
console.log(isFoundArr(arr, 6));
console.log(isFoundArr(arr, 7));

// Solution 2: Using the some() method
function isFoundArrV2(arr, searchValue) {
  return arr.some((num) => num === searchValue);
}

// Using arrow function expression
const isFoundArrV3 = (arr, searchValue) =>
  arr.some((num) => num === searchValue);

// Test
console.log(isFoundArrV3(arr, 6));
console.log(isFoundArrV3(arr, 7));
