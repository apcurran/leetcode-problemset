"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @return {number}
 */
function balancedStringSplit(str) {
    let balanceVal = 0;
    let matchesAmt = 0;

    for (let char of str) {
        if (char === "L") {
            balanceVal++;
        } else {
            balanceVal--;
        }

        if (balanceVal === 0) matchesAmt++;
    }

    return matchesAmt;
}

console.log(balancedStringSplit("RLRRLLRLRL")); // 4
