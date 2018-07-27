import { Deck } from './Deck';
import './styles.css';

document.addEventListener("DOMContentLoaded", function() {
  let deck = new Deck();
  const displayDeck = (cardsArr) => {
    let cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = "";
    cardsArr.forEach((card) => {
      let cardToDisplay = document.createElement("div");
      let cardValue;
      let cardSuit;
      if (card[0] === 1) {
        cardValue = 'A';
      } else if (card[0] === 11) {
        cardValue = 'J';
      } else if (card[0] === 12) {
        cardValue = 'Q';
      } else if (card[0] === 13) {
        cardValue = 'K';
      } else {
        cardValue = card[0];
      }
      if (card[1] === 'hearts') {
        cardSuit = '♥';
        cardToDisplay.className = 'red';
      } else if (card[1] === 'diamonds') {
        cardSuit = '♦';
        cardToDisplay.className = 'red';
      } else if (card[1] === 'clubs') {
        cardSuit = '♣';
      } else {
        cardSuit = '♠';
      }
  	  cardToDisplay.className += ' card';
  	  cardToDisplay.append(cardValue);
  	  cardToDisplay.append(cardSuit);
      cardGrid.appendChild(cardToDisplay);
    })
  }
  document.getElementById('shuffle').addEventListener('click', function() {
    deck.shuffle();
    displayDeck(deck.cards);
  });
  document.getElementById('sort').addEventListener('click', function() {
    deck.sortByValue();
    displayDeck(deck.cards);
  });
  displayDeck(deck.cards);
});
