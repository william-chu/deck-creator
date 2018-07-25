import { Deck } from "./../src/Deck.js";

describe('Deck', function() {
  let reusableObject;

  beforeEach(function() {
    reusableDeck = new Deck();
  });

  it('Deck contains 52 card items', function() {
    expect(reusableDeck.length).toEqual(52);
  });
});
