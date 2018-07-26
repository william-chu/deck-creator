import { Deck } from "./../src/Deck.js";

describe('Deck', function() {
  let reusableDeck;
  let isSorted = false;

  beforeEach(function() {
    reusableDeck = new Deck();
  });

  it('should generate a deck of cards that contains 52 array items', function() {
    expect(reusableDeck.cards.length).toEqual(52);
  });

  it('should shuffle a deck that does not equal new deck', function() {
    let shuffledDeck = new Deck();
    shuffledDeck.shuffle();
    expect(shuffledDeck.cards).not.toEqual(reusableDeck.cards);
  });

  it('should sort a shuffled deck by value', function() {
    reusableDeck.sortByValue();
    isSorted = reusableDeck.cards.every( (item, i, cardsArr) => i > 0 ? cardsArr[i][0] >= cardsArr[i - 1][0] : cardsArr[i][0] <= cardsArr[i + 1][0] );
    expect(isSorted).toBe(true);
  });
});
