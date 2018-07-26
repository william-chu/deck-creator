import { Deck } from './Deck';
import './styles.css';

function shufflePress() {
  displayDeck.shuffle();
}

function sortPress() {
  displayDeck.sortByValue();
}

function displayDeck() {
  let cardGrid = document.getElementById('card-grid');
  cardsArr.forEach((card) => {
    let cardToDisplay = document.createElement("div");
	  cardToDisplay.className = "card";
	  card.appendChild(card[0]);
	  card.appendChild(card[1]);
    cardGrid.appendChild(cardToDisplay);
  })
}

document.addEventListener("DOMContentLoaded", function() {
  let displayDeck = new Deck();
  let cardsArr = displayDeck.cards;
  let cardGrid = document.getElementById('card-grid');
  cardsArr.forEach((card) => {
    let cardToDisplay = document.createElement("div");
	  cardToDisplay.className = "card";
	  cardToDisplay.append(card[0]);
	  cardToDisplay.append(card[1]);
    cardGrid.appendChild(cardToDisplay);
  })
});
