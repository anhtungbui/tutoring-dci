/** THE WAY WE NORMALLY DO IT
 * Everything in one big file
 * Will get into troubles in the future if the codebase grows
 */
/*
const demoForm = document.getElementById('demoForm');
const inputField = document.getElementById('inputField');
const inputField2 = document.getElementById('inputField2');
const resultsDiv = document.getElementById('results');

demoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(inputField.value);
  // console.log(event.target[0]);
  // const keyword = event.target[0].value;
  handleDemoForm();
});

async function handleDemoForm() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  const res = await fetch(url);
  const data = await res.json();

  // const markup = `<img src=${data.message} style="width: 300px" />`;
  // resultsDiv.innerHTML = markup;
}

*/
