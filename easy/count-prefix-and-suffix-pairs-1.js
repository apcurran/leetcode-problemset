"use strict";

/**
 * solution 1 -- brute force
 * n = words length
 * s = str2 length
 * time: O(n^2 * s)
 * space: O(1)
 *
 * @param {string[]} words
 * @return {number}
 */
function countPrefixSuffixPairs(words) {
    let validPairsCount = 0;

    for (let i = 0; i < words.length; i++) {
        const str1 = words[i];

        for (let j = i + 1; j < words.length; j++) {
            const str2 = words[j];

            if (str2.startsWith(str1) && str2.endsWith(str1)) {
                validPairsCount++;
            }
        }
    }

    return validPairsCount;
}

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])); // 4
console.log(countPrefixSuffixPairs(["a", "abb"])); // 0
