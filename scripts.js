const cards = document.querySelectorAll(".memory-card");
console.log(cards[0]);
console.log(cards[0].classList.contains('flip'));



let hasFlippedCard = false;
let lockBoard = false;
let firstCard , secondeCard;

function flipCard(){
    if (lockBoard) return;
    this.classList.add('flip');


if(!hasFlippedCard){
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
}
    //seconde click
    
    secondeCard = this;

    //now check if cards matches
    checkForMatch();
    
}

function checkForMatch(){
let isMatch = firstCard.dataset.name === secondeCard.dataset.name;

isMatch ? disableCards() : unFlipCards();

}

function disableCards(){
    firstCard.removeEventListener('click' ,flipCard);
    secondeCard.removeEventListener('click' ,flipCard);

   
    resetBoard();

}

function unFlipCards(){
    lockBoard = true;
    setTimeout(()=>{
      
        firstCard.classList.remove('flip');
        secondeCard.classList.remove('flip');
        resetBoard();
    } ,1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

  

cards.forEach(card => card.addEventListener('click' , flipCard));