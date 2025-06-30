"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
function checkPowersOfThree(n) {
    while (n) {
        // a remainder of 2 can't be a power of 3
        if (n % 3 === 2) return false;

        n = Math.floor(n / 3);
    }

    return true;
}

console.log(checkPowersOfThree(12)); // true
// console.log( checkPowersOfThree(21) ); // false
