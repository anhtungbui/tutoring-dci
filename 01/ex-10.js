/*
source: edabit 

Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

** Example
cityFacts = {
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
} ➞ "Paris has a population of 2,140,526 and is situated in Europe"

*/

// Solution 1
const cityFacts = {
  name: 'Paris',
  population: '2,140,526',
  continent: 'Europe',
};

function getCityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}.`;
}

console.log(getCityFacts(cityFacts));

// Solution 2: Using object desctructuring
function getCityFactsV2(city) {
  const { name, population, continent } = city;
  console.log(name, population, continent);
}

getCityFactsV2(cityFacts);
