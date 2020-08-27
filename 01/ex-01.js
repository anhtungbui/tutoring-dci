/*
Write a program to simulate a calculator with 4 basic calculations.

*/

// SOLUTION
function basicCalc(a, b, operator) {
  let result;

  switch (operator) {
    case 'add':
      result = a + b;
      break;
    case 'substract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    default:
      result = 'Please enter a valid opeator';
  }

  return result;
}

// TEST
console.log(basicCalc(10, 5, 'divid')); // Output: Please enter a valid opeator
console.log(basicCalc(10, 5, 'divide')); // Output: 2
