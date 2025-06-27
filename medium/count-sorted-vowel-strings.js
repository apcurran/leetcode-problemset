"use strict";

/**
 * @param {number} n
 * @return {number}
 */
function countVowelStrings(n) {
    return vowelHelper(n, 0);
}

/**
 * @param {number} n 
 * @param {number} vowelNum
 * @returns {number} - result
 */
function vowelHelper(n, vowelNum) {
    // Base case
    if (n == 0) return 1;

    let result = 0;

    // Loop 5 times for each vowel possibility a, e, i, o, u
    for (let i = vowelNum; i < 5; i++) {
        result += vowelHelper(n - 1, i);
    }

    return result;
}

console.log( countVowelStrings(1) ); // 5
console.log( countVowelStrings(2) ); // 15
