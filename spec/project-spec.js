import { Deck } from "./../src/Deck.js";

describe('Deck', function() {
  let reusableDeck;

  beforeEach(function() {
    reusableDeck = new Deck();
  });

  it('Deck of cards contains 52 array items', function() {
    console.log(reusableDeck);
    expect(reusableDeck.cards.length).toEqual(52);
  });
});
