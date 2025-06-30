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
    let validCombos = 1;

    for (let i = 2; i <= n; i++) {
        validCombos = (validCombos * (2 * i - 1) * i) % modulusAmount;
    }

    return validCombos;
}

console.log(countOrders(2)); // 6
console.log(countOrders(3)); // 90
