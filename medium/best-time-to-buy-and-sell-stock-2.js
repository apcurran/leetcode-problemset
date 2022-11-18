"use strict";

/**
 * solution 1 -- two-pointers
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let total = 0;

    for (let i = 1; i < prices.length; i++) {
        const currNum = prices[i];
        const prevNum = prices[i - 1];

        if (currNum > prevNum) {
            const diff = currNum - prevNum;
            total += diff;
        }
    }

    return total;
}

console.log( maxProfit([7, 1, 5, 3, 6, 4]) ); // (3 + 4) -> 7
console.log( maxProfit([1, 2, 3, 4, 5]) ); // 4
