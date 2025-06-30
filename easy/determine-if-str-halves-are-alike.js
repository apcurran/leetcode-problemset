"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {boolean}
 */
function halvesAreAlike(str) {
    const halfwayIndex = str.length / 2;
    const firstHalf = str.slice(0, halfwayIndex);
    const secondHalf = str.slice(halfwayIndex);
    let firstHalfVowelCount = 0;
    let secondHalfVowelCount = 0;

    for (let char of firstHalf) {
        const lowerChar = char.toLowerCase();

        if (
            lowerChar === "a" ||
            lowerChar === "e" ||
            lowerChar === "i" ||
            lowerChar === "o" ||
            lowerChar === "u"
        ) {
            firstHalfVowelCount++;
        }
    }

    for (let char of secondHalf) {
        const lowerChar = char.toLowerCase();

        if (
            lowerChar === "a" ||
            lowerChar === "e" ||
            lowerChar === "i" ||
            lowerChar === "o" ||
            lowerChar === "u"
        ) {
            secondHalfVowelCount++;
        }
    }

    return firstHalfVowelCount === secondHalfVowelCount;
}

console.log(halvesAreAlike("book")); // true -> first half has 1 vowel & second half has 1 vowel
console.log(halvesAreAlike("textbook")); // false
