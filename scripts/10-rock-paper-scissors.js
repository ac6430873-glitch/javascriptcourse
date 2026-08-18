let score =JSON.parse(localStorage.getItem('score'))|| {
          wins: 0,
          losses: 0,
          draws: 0
        };
          updateScoreElement();
          

        
        /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          draws: 0
        };
      }
    */

       const rockButton = document.querySelector('.js-scissors-button')
   rockButton.addEventListener('click',() => {
     playGame('rock')
   });
    const rockButton = document.querySelector('.js-rock-button')
   rockButton.addEventListener('click',() => {
     playGame('scissors')
   });
    const rockButton = document.querySelector('.js-paper-button')
   rockButton.addEventListener('click',() => {
     playGame('paper')
   });

     function pickComputerMove () {
       const randomNumber = Math.random();
          let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3){computerMove = 'rock'} else if (randomNumber >= 1/3 && randomNumber < 2/3 ) { computerMove = 'paper'} else if (randomNumber >= 2/3 && randomNumber < 1) { computerMove = 'scissors'};return computerMove;
   }

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
       let result ='';
       if (playerMove === 'scissors' ) {
        if (computerMove === 'rock') { result = 'You lose'; } else if (computerMove === 'paper') { result = 'You win'; } else if (computerMove === 'scissors') { result = 'Draw'; }
       }
       if (playerMove === 'rock' ) {
        if (computerMove === 'rock') { result = 'Draw'; } else if (computerMove === 'paper') { result = 'You lose'; } else if (computerMove === 'scissors') { result = 'You win'; }
       }
       if (playerMove === 'paper' ) {
        if (computerMove === 'rock') { result = 'You win'; } else if (computerMove === 'paper') { result = 'Draw'; } else if (computerMove === 'scissors') { result = 'You lose'; }
       }
       if (result === 'You win') {
         score.wins += 1;} else if (result === 'You lose') {
         score.losses += 1;} 
         else if (result === 'Draw') {
         score.draws += 1;
       }
       localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();
     document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `you
  <img src="${playerMove}-emoji.png" class="i1" >
  <img src="${computerMove}-emoji.png"class="i1">
  computer `;

      
        
      }
      function updateScoreElement() {
         document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}
  
document.addEventListener('keydown', function(event) {
  console.log(event.key);

  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});