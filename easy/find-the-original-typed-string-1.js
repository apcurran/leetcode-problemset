"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
    let counter = 1; // there must always be at least 1 form of word

    for (let i = 0; i < word.length - 1; i++) {
        const currentLetter = word[i];
        const nextLetter = word[i + 1];

        if (currentLetter === nextLetter) counter++;
    }

    return counter;
}

console.log(possibleStringCount("abbcccc")); // 5
console.log(possibleStringCount("abcd")); // 1
console.log(possibleStringCount("aaaa")); // 4
