import { Deck } from "./../src/Deck.js";

describe('Deck', function() {
  let reusableDeck;

  beforeEach(function() {
    reusableDeck = new Deck();
  });

  it('should generate a deck of cards that contains 52 array items', function() {
    // console.log(reusableDeck);
    expect(reusableDeck.cards.length).toEqual(52);
  });

  it('should shuffle a deck that does not equal new deck', function() {
    let shuffledDeck = reusableDeck.shuffle();
    console.log(shuffledDeck.cards);
    expect(shuffledDeck.cards).not.toEqual(reusableDeck.cards);
  });

});
