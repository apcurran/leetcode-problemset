"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s
 * @return {number}
 */
function maxFreqSum(s) {
    let charFrequencies = new Map();

    for (let char of s) {
        const charPreviousCount = charFrequencies.get(char) || 0;
        charFrequencies.set(char, charPreviousCount + 1);
    }

    const VOWELS = "aeiou";
    let maxVowelFrequency = 0;
    let maxConsonantFrequency = 0;

    for (let [char, charCount] of charFrequencies) {
        if (VOWELS.includes(char)) {
            maxVowelFrequency = Math.max(maxVowelFrequency, charCount);
        } else {
            maxConsonantFrequency = Math.max(maxConsonantFrequency, charCount);
        }
    }

    return maxVowelFrequency + maxConsonantFrequency;
}

console.log(maxFreqSum("successes")); // 6
console.log(maxFreqSum("aeiaeia")); // 3
