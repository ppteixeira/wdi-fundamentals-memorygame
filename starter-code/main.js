
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var correctPoints = 0;
var wrongPoints = 0;
var totalAttempts = 0;
function createBoard(){
  for (var i = 0; i < cards.length; i++) {
    var gameBoard = document.getElementById('game-board');
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.value = cards[i];   
    gameBoard.appendChild(newCard);
    newCard.addEventListener('click', showCard);
    newCard.addEventListener('click', isTwoCards);
  }
}
createBoard();

function isTwoCards(){
  cardsInPlay.push(this.value);
  
  if (cardsInPlay.length === 2) {   // if there are 2 cards selected, call the function to check if they match.
    isMatch(cardsInPlay);
  }
}

function isMatch(selectedCards){    // check if 2 cards match and give the result.
  if (selectedCards[0] == selectedCards[1]) { 
    document.getElementById('result').innerHTML = ("Congratulations!!! <br>You found a match! <br> <button id='tryAgainBtn'> Try Again </button>");
    document.getElementById('result').className = ('resultCorrect');
    document.getElementById("tryAgainBtn").addEventListener('click',flipBack); // button to retry
    correctPoints++;
  }else {
    document.getElementById('result').innerHTML = ('Sorry, try again  <br> <button id="tryAgainBtn"> Try Again </button>');
    document.getElementById('result').className = ('resultWrong');
    document.getElementById("tryAgainBtn").addEventListener('click',flipBack);
    wrongPoints++;
  } 
  totalAttempts = correctPoints + wrongPoints;
  points();
}

function showCard(){  // show the selected card

  if (cardsInPlay.length < 2){ // do not let to show more than two cards 
    if (this.value == 'king'){
      this.innerHTML = ('<img src="king.jpg" alt="King of Spades" />')
    }else{
      this.innerHTML = ('<img src="queen.jpg" alt="Queen of Clubs" />')
    }
  }
}

function flipBack(){  // Flip the cards back to original side.

  var allCards = document.getElementsByClassName('card');
  for (var i = 0; i < allCards.length; i++) {
    allCards[i].innerHTML = "";
  }
  cardsInPlay = [];
  document.getElementById('result').className = ('resultDefault');
  document.getElementById('result').innerHTML = ('');
}

function points(){
  if (totalAttempts > 0 ) {
    var newPointBoard = document.getElementById('count');
  }
  newPointBoard.innerHTML = ("Total Attempts: " + totalAttempts + "<br> Wrong : " + wrongPoints + "<br> Correct: " + correctPoints);
}


