"use strict";

/**
 * solution 1 -- correct, but TLE
 * time: O(n * k)
 * space: O(k) slice copy of k per iteration of str
 * 
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
function maxVowels(str, k) {
    let maxVowelCount = 0;
    // iterate str
    for (let i = 0; i < str.length - k + 1; i++) {
        const subStr = str.slice(i, i + k);
        // after iteration record max of vowel frequencies
        let vowelSubStrCount = 0;

        for (let char of subStr) {
            if (char === "a" ||
                char === "e" ||
                char === "i" ||
                char === "o" ||
                char === "u") {
                vowelSubStrCount++;
            }
        }

        maxVowelCount = Math.max(maxVowelCount, vowelSubStrCount);
    }
    // return max of vowel frequencies in substrs of str
    return maxVowelCount;
}

console.log( maxVowels("abciiidef", 3) ); // 3 ("iii" has 3 vowels)
console.log( maxVowels("aeiou", 2) ); // 2
