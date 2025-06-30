"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function findPermutationDifference(s, t) {
    let tCharsMap = new Map();

    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        tCharsMap.set(tChar, i);
    }

    let differencesSum = 0;

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tCharIndex = tCharsMap.get(sChar);
        const indicesDifference = Math.abs(i - tCharIndex);
        differencesSum += indicesDifference;
    }

    return differencesSum;
}

console.log(findPermutationDifference("abc", "bac")); // 2
