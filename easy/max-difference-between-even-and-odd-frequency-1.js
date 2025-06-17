"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {number}
 */
function maxDifference(str) {
    // hashmap count each char frequency
    let charFrequencies = new Map();

    for (let char of str) {
        const charPrevCount = charFrequencies.get(char) || 0;
        charFrequencies.set(char, charPrevCount + 1);
    }

    // iterate hashmap and check for min (even) and max (odd)
    let minEven = Infinity;
    let maxOdd = -Infinity;

    for (let entry of charFrequencies) {
        const charCount = entry[1];

        if (charCount % 2 === 0) {
            minEven = Math.min(minEven, charCount);
        } else {
            maxOdd = Math.max(maxOdd, charCount);
        }
    }

    return maxOdd - minEven;
}

console.log(maxDifference("aaaaabbc")); // 3
console.log(maxDifference("abcabcab")); // 
