/*
Sandwich Fillings
source: edabit

Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

** Examples

getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

** Notes

The first and last elements will always be "bread".
*/
const hamburger = ['bread', 'ham', 'cheese', 'ham', 'bread'];
const hamburger2 = ['bread', 'lettuce', 'bacon', 'tomato', 'cheese', 'bread'];

function getFillings(arr) {
  return arr.slice(1, -1);
}

console.log(getFillings(hamburger));
console.log(getFillings(hamburger2));
