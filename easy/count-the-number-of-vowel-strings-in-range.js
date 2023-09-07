"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function vowelStrings(words, left, right) {
    let vowelStrsCount = 0;

    for (let i = left; i <= right; i++) {
        const word = words[i];

        if (isVowelString(word)) vowelStrsCount++;
    }

    return vowelStrsCount;
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isVowelString(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const beginningLetter = str[0];
    const endingLetter = str[str.length - 1];

    return vowels.includes(beginningLetter) && vowels.includes(endingLetter);
}

console.log(vowelStrings(["are","amy","u"], 0, 2)); // 2
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4)); // 3
