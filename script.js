'use strict';

//selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, playing;   //scoping     

//initial
const init = function() {
 scores = [0, 0];
 currentScore = 0;
 activePlayer = 0;
 playing = true;

current0El.textContent = 0;
current1El.textContent = 0;

score0El.textContent = 0;
score1El.textContent = 0;

player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');

player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};

init();



//starting page conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPLayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//rolling dice functionality

btnRoll.addEventListener('click' , function() {
    if (playing){
    //generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;  //imp**
    //check for rolled 1
    if(dice !== 1){
//add dice to current score
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
  
        //switch the active player
switchPLayer();

    } }
});



btnHold.addEventListener('click' , function(){
    //add current score to active players totals
    if(playing){
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    }
    //check if totals >= 100 
    //finish the game
    if(scores[activePlayer] >= 100 ){

        playing = false

     document.querySelector(`.player--${activePlayer}`)
     .classList.add('player--winner');

     document.querySelector(`.player--${activePlayer}`)
     .classList.remove('player--active');

     diceEl.classList.add('hidden');
    }

    else{//switch to other player
        switchPLayer();
    }

    
})

btnNew.addEventListener('click' , init);

//sita ram