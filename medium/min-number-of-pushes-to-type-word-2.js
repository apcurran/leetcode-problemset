"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1) -- no more than 26 letters
 *
 * @param {string} word
 * @return {number}
 */
function minimumPushes(word) {
    let frequenciesCount = new Array(26).fill(0);

    for (let char of word) {
        const charASCII = char.charCodeAt(0);
        const charCodeAdjusted = charASCII - 97;
        frequenciesCount[charCodeAdjusted]++;
    }

    frequenciesCount.sort((a, b) => b - a);

    let totalPresses = 0;

    for (let i = 0; i < 26; i++) {
        if (frequenciesCount[i] === 0) {
            // since all frequencies greater than 0 will come first
            break;
        }

        const currentFrequency = frequenciesCount[i];
        const amount = Math.floor(i / 8 + 1) * currentFrequency;
        totalPresses += amount;
    }

    return totalPresses;
}

console.log(minimumPushes("xyzxyzxyzxyz")); // 12
