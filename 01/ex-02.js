/*
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
*/

// SOLUTION
function isSumLessThan100(a, b) {
  if (a + b < 100) return true;
  else return false;
}

// TEST CASES
console.log(isSumLessThan100(99, 1)); // Output: false
console.log(isSumLessThan100(-29, 30)); // Output: true

// 2ND SOLUTION
function isSumLessThan100v2(a, b) {
  return a + b < 100;
}

// TEST CASES
console.log(isSumLessThan100v2(99, 1));
console.log(isSumLessThan100v2(-29, 30));
