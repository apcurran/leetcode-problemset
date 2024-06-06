"use strict";

/**
 * solution 1
 * time: O(n^2) -- array.shift() inside of for loop
 * space: O(n)
 * 
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
    let indicesQueue = [];

    for (let i = 0; i < deck.length; i++) {
        indicesQueue.push(i);
    }

    deck.sort(function sortAsc(a, b) {
        return a - b;
    });

    let results = new Array(deck.length);

    for (let i = 0; i < deck.length; i++) {
        // reveal top card
        const topCardIndex = indicesQueue.shift();
        results[topCardIndex] = deck[i];
        // while there are still cards in the deck, put next top card to bottom
        const nextTopCard = indicesQueue.shift();
        indicesQueue.push(nextTopCard);
    }

    return results;
}

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));
// [2,13,3,11,5,17,7]
