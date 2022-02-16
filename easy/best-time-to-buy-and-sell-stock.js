"use strict";

// /**
//  * Solution 1
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

//             if (testMaxProfit > globalMaxProfit) {
//                 globalMaxProfit = testMaxProfit;
//             }
//         }
//     }

//     if (globalMaxProfit > 0) return globalMaxProfit;

//     return 0;
// }

/**
 * Solution 2 -- dynamic programming
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
        if (prices[leftPointer] < prices[rightPointer]) {
            // positive selling price -- PROFIT
            const currProfit = prices[rightPointer] - prices[leftPointer];
            globalMaxProfit = Math.max(globalMaxProfit, currProfit);
        } else {
            // would be a negative loss, so move leftPointer to curr rightPointer position
            leftPointer = rightPointer;
        }

        rightPointer++;
    }

    return globalMaxProfit;
}

console.log( maxProfit([7, 1, 5, 3, 6, 4]) ); // 5 -- max profit
console.log( maxProfit([7, 6, 4, 3, 1]) ); // 0 -- no profit
