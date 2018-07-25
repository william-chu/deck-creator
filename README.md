# **Deck Generator**

#### By William Chu

## Requirements

1. Must provide a standard deck of 52 playing cards, with 4 suits.
2. Must be able to sort the deck in ascending order.
  * You are free to determine what the term "ascending order" means for a deck of cards, but be ready to discuss your choice during the interview.
3. Must be able to randomly shuffle the deck of cards.
4. Can be in any language.
5. Be prepared to explain what you did and why you did it.
6. OPTIONAL - Provide functioning unit tests

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| Program will generate set of 13 cards with value 1-13 | new Set(); | [1, 2, 3, ...13] |
| Program will generate 4 sets of 13 cards with 4 different suits | new Set(suit);  | suit1: [1,2,3, ...13],<br> suit2: [1,2,3, ...13],<br>  suit3: [1,2,3, ...13],<br> suit4: [1,2,3, ...13] |
| Program will generate a deck with 52 cards, 4 sets of cards with different suits | new Deck(); | Deck [[suit1],[suit2],[suit3],[suit4]] |

## Setup/Installation Requirements

* To view project code, _clone repository from_ https://github.com/william-chu/deck-generator
* Install Node.js https://nodejs.org/en/
* Open terminal, navigate to project root folder and run npm install
* To bundle and build project distribution folder, run npm run build
* To view Jasmine tests, run npm test
* To view project in development mode, run npm start

## Known Bugs

## Technologies Used

* HTML/CSS
* JavaScript
* Node.js
* Webpack/Babel
* ESLint
* Jasmine/Karma

William Chu © 2018
