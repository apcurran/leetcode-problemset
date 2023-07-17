"use strict";

// /**
//  * solution 1
//  * n = number of coins in array
//  * a = amount
//  * time: O(n^a)
//  * space: O(n)
//  * 
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// function coinChange(coins, amount) {
//     // base case
//     if (amount === 0) return 0;

//     if (amount < 0) return -1;

//     let minTotalCoins = -1;

//     // recursive case
//     for (let coin of coins) {
//         const updatedAmount = amount - coin;
//         const coinCount = coinChange(coins, updatedAmount);
        
//         if (coinCount >= 0) {
//             if (minTotalCoins < 0) {
//                 minTotalCoins = coinCount + 1;
//             } else {
//                 minTotalCoins = Math.min(minTotalCoins, coinCount + 1);
//             }
//         }
//     }

    
//     return minTotalCoins;
// }

/**
 * solution 2 -- memoized DP top-down
 * n = number of coins in array
 * a = amount
 * time: O(n * a)
 * space: O(n)
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount, cache = new Map()) {
    // base case
    if (amount === 0) return 0;

    if (amount < 0) return -1;

    if (cache.has(amount)) {
        return cache.get(amount);
    }

    let minTotalCoins = -1;

    // recursive case
    for (let coin of coins) {
        const updatedAmount = amount - coin;
        const coinCount = coinChange(coins, updatedAmount, cache);
        
        if (coinCount >= 0) {
            // coinCount + 1 to include this current coin for total coins
            if (minTotalCoins < 0) {
                minTotalCoins = coinCount + 1;
            } else {
                minTotalCoins = Math.min(minTotalCoins, coinCount + 1);
            }
        }
    }

    cache.set(amount, minTotalCoins);
    
    return minTotalCoins;
}

console.log( coinChange([1], 0) ); // 0
console.log( coinChange([1,2,5], 11) ); // 3
