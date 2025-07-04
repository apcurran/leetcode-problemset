"use strict";

// /**
//  * Solution 1 -- TLE
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} prices
//  * @return {number}
//  */
// function maxProfit(prices) {
//     let globalMaxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         const outerCurrNum = prices[i];

//         for (let j = i + 1; j < prices.length; j++) {
//             const innerCurrNum = prices[j];
//             const testMaxProfit = innerCurrNum - outerCurrNum;
//             globalMaxProfit = Math.max(globalMaxProfit, testMaxProfit);
//         }
//     }

//     return globalMaxProfit;
// }

/**
 * Solution 2 -- sliding window technique
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // buy
    let leftPointer = 0;
    // sell
    let rightPointer = 1;
    let globalMaxProfit = 0;

    while (rightPointer < prices.length) {
        const buyPrice = prices[leftPointer];
        const sellPrice = prices[rightPointer];

        if (buyPrice < sellPrice) {
            // positive selling price -- PROFIT
            const currProfit = sellPrice - buyPrice;
            globalMaxProfit = Math.max(globalMaxProfit, currProfit);
        } else {
            // would be a negative loss,
            // so move leftPointer to curr rightPointer position to avoid buying at a high price
            leftPointer = rightPointer;
        }

        rightPointer++;
    }

    return globalMaxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 -- max profit
console.log(maxProfit([7, 6, 4, 3, 1])); // 0 -- no profit
