class Deck {
  constructor() {
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    this.cards = this.genDeck();
  }

  genDeck() {
    let newDeck = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        newDeck.push(this.values[j] + ':' + this.suits[i]);
      }
    }
    return newDeck;
  }

  shuffle() {
    let i = 0;
    let j = 0;
    let placeholder = null;

    for (i = this.cards.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      placeholder = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = placeholder;
    }
  }

}

export { Deck };
