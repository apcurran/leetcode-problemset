"use strict";

/**
 * solution 1 -- dynamic programming (bottom up)
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function countOrders(n) {
    const modulusAmount = 1e9 + 7;
    let validSequencesCount = 1;

    for (let i = 2; i <= n; i++) {
        validSequencesCount = (validSequencesCount * (2 * i - 1) * i) % modulusAmount;
    }

    return validSequencesCount;
}

console.log(countOrders(2)); // 6
console.log(countOrders(3)); // 90

