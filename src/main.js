import { Deck } from './Deck';
import './styles.css';

document.addEventListener("DOMContentLoaded", function() {
  let deck = new Deck();
  const displayDeck = (cardsArr) => {
    let cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = "";
    cardsArr.forEach((card) => {
      let cardToDisplay = document.createElement("div");
      let symbol;
      if (card[1] === 'hearts') {
        symbol = '♥';
      } else if (card[1] === 'diamonds') {
        symbol = '♦';
      } else if (card[1] === 'clubs') {
        symbol = '♣';
      } else {
        symbol = '♠';
      }
  	  cardToDisplay.className = "card";
  	  cardToDisplay.append(card[0]);
  	  cardToDisplay.append(symbol);
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
