import UI, { elements } from './view.js';
import RandomDog from './model.js';

const butcher = new RandomDog('Butcher');
const ui = new UI();

elements.demoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleDemoForm();
});

async function handleDemoForm() {
  const message = butcher.sayHi();
  const responseFromLS = butcher.saveToLS(message);
  ui.renderMessage(responseFromLS);
  const dogPic = await butcher.getData();

  ui.renderDogPic(dogPic);
}

elements.clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  butcher.clearLS();
});

window.onload = function () {
  const newMessage = butcher.readFromLS();
  if (newMessage == null) {
    ui.renderMessage('Nothing in the database. Click Add to create one');
  } else ui.renderMessage(newMessage);
};
