

/* -----------------------
Before you start, go ahead and comment out the if statement
 from the last assignment. We'll work with it to finalize our
  memory game during the next unit.


if (cardOne == cardTwo) {
  alert("You found a match!");

}else {
  alert("Sorry, try again");
} 

--------------????-----------*/
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function createBoard(){
  for (var i = 0; i < cards.length; i++) {
    var gameBoard = document.getElementById('game-board');
    var newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.value = cards[i];    // ?????? <<<------------ working? 
    newCard.onclick = function showCard(){
      if (this.value == 'king'){
        this.innerHTML = ('<img src="king.jpg" alt="King of Spades" />')
      }else{
        this.innerHTML = ('<img src="queen.jpg" alt="Queen of Clubs" />')
      }
    };
    newCard.addEventListener('click', isTwoCards );
    
    gameBoard.appendChild(newCard);

  }
}
createBoard();

function isMatch(cards){
  if (cards[0] == cards[1]) {
    alert("Congratulations!!! You found a match!");
  }else {
    alert("Sorry, try again");
  } 
}

function isTwoCards(){
  cardsInPlay.push(this.value);
  

  if (cardsInPlay.length === 2) {   // if there are 2 cards selected, check if they match.
    isMatch(cardsInPlay);
    cardsInPlay = [];    //clear cards for next try
  }
}


