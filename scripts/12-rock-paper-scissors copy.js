let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  draws: 0
};

let isAutoPlaying = false;
let intervalId;


// Computer chooses a move
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


// Play the game
function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';


  if (playerMove === 'rock') {

    if (computerMove === 'rock') {
      result = 'Draw';

    } else if (computerMove === 'paper') {
      result = 'You lose';

    } else {
      result = 'You win';
    }

  } else if (playerMove === 'paper') {

    if (computerMove === 'rock') {
      result = 'You win';

    } else if (computerMove === 'paper') {
      result = 'Draw';

    } else {
      result = 'You lose';
    }

  } else if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
      result = 'You lose';

    } else if (computerMove === 'paper') {
      result = 'You win';

    } else {
      result = 'Draw';
    }
  }


  // Update score
  if (result === 'You win') {
    score.wins++;

  } else if (result === 'You lose') {
    score.losses++;

  } else {
    score.draws++;
  }


  // Save score
  localStorage.setItem('score', JSON.stringify(score));


  // Show result
  document.querySelector('.js-result').innerHTML = result;


  // Show moves
  document.querySelector('.js-moves').innerHTML = `
    You
    <img src="${playerMove}-emoji.png" class="i1">
    <img src="${computerMove}-emoji.png" class="i1">
    Computer
  `;


  // Show score
  updateScoreElement();
}


// Update score
function updateScoreElement() {

  document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}


// Reset score
function resetScore() {

  score.wins = 0;
  score.losses = 0;
  score.draws = 0;

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = '';

  document.querySelector('.js-moves').innerHTML =
    'Make a move!';
}


// Auto Play
function autoPlay() {

  if (!isAutoPlaying) {

    intervalId = setInterval(function() {

      const playerMove = pickComputerMove();

      playGame(playerMove);

    }, 1000);

    isAutoPlaying = true;

  } else {

    clearInterval(intervalId);

    isAutoPlaying = false;
  }
}


// Keyboard controls
document.addEventListener('keydown', function(event) {

  const key = event.key.toLowerCase();

  if (key === 'r') {

    playGame('rock');

  } else if (key === 'p') {

    playGame('paper');

  } else if (key === 's') {

    playGame('scissors');

  } else if (key === 'a') {

    autoPlay();
  }
});


// Display saved score when page loads
updateScoreElement();