export const elements = {
  demoForm: document.getElementById('demoForm'),
  inputField: document.getElementById('inputField'),
  resultsDiv: document.getElementById('results'),
  clearBtn: document.getElementById('clearBtn'),
};

export default class UI {
  renderDogPic(pic) {
    const markup = `<img src=${pic.message} style="width: 200px" />`;
    elements.resultsDiv.insertAdjacentHTML('beforeend', markup);
  }

  renderMessage(message) {
    const markup = `<h1>${message}<h1/>`;
    elements.resultsDiv.insertAdjacentHTML('beforeend', markup);
  }
}
