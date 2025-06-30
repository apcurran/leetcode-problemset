"use strict";

/**
 * solution 1
 * n = words length
 * m = otherWord length
 * time: O(n^2 * m)
 * space: O(n)
 *
 * @param {string[]} words
 * @return {string[]}
 */
function stringMatching(words) {
    return words.filter(function keepSubstrWords(word, i) {
        for (let j = 0; j < words.length; j++) {
            if (j === i) continue;

            const otherWord = words[j];

            if (otherWord.includes(word)) {
                return true;
            }
        }

        return false;
    });
}

console.log(stringMatching(["mass", "as", "hero", "superhero"])); // ["as", "hero"]
