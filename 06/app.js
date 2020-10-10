let template;

template = Handlebars.compile(`
<header>
  <h1 class="bg-primary text-center text-white">Rock Paper Scissors Game</h1>
</header>
<main class="container">
  <div class="text-center" id="scores">
    <h3>You vs Computer</h3>
    <h3>0 : 0</h3>
  </div>
  <h3 class="text-center">Pick Your Choice</h3>
  <div class="text-center" id="choices">
    <button>✊</button>
    <button>🖐</button>
    <button>✌️</button>
  </div>
</main>
`);

document.body.innerHTML = template();
const choicesDiv = document.getElementById('choices');

user = {
  score: 0,
  choice: '',
  getChoice(choice) {
    switch (choice) {
      case '✊':
        this.choice = 'rock';
        break;
      case '🖐':
        this.choice = 'paper';
        break;
      case '✌️':
        this.choice = 'scissors';
        break;
    }
  },
};

computer = {
  score: 0,
  choice: '',
  getChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    this.choice = choices[Math.floor(Math.random() * 3)];
  },
};

function compareChoices(user, computer) {
  let result = '';
  console.log(computer);

  user === computer ? (result = 'Draw!') : null;

  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    result = 'User wins';
  } else {
    result = 'Computer wins';
  }

  console.log(result);
}

choicesDiv.addEventListener('click', (e) => {
  user.getChoice(e.target.innerText);
  computer.getChoice();
  compareChoices(user.choice, computer.choice);
});
