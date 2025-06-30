"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} word
 * @param {string} ch
 * @return {string}
 */
function reversePrefix(word, ch) {
    if (!word.includes(ch)) return word;

    const chFirstIndex = word.indexOf(ch);
    const wordPrefix = word.slice(0, chFirstIndex + 1);
    const wordEnding = word.slice(chFirstIndex + 1);
    const reversedWordPrefix = wordPrefix.split("").reverse().join("");

    return reversedWordPrefix + wordEnding;
}

console.log(reversePrefix("abcdefd", "d")); // "dcbaefd"
console.log(reversePrefix("abcd", "z")); // "abcd"
