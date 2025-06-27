"use strict";

/**
 * Solution 1 -- O(n log n) depending on the JS engine implementation of Set.prototype.has(value),
 *                          on average Set.has() is faster than array.includes().
 * 
 * You're given strings jewels representing the types of stones that are jewels,
 * and stones representing the stones you have.
 * Each character in stones is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 * All the characters of jewels are unique.
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
    const jewelsSet = new Set(jewels);
    let jewelsCount = 0;

    for (let stone of stones) {
        if (jewelsSet.has(stone)) {
            jewelsCount += 1;
        }
    }

    return jewelsCount;
}

console.log( numJewelsInStones("aA", "aAAbbbb") ); // 3
console.log( numJewelsInStones("z", "ZZ") ); // 0
