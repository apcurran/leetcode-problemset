"use strict";

/**
 * Solution 1
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * @param {number[]} piles
 * @return {number}
 */
function maxCoins(piles) {
    // Sort in desc order
    piles.sort((a, b) => b - a);
    // Init var to track total num of coins
    let myCoinsTotal = 0;

    while (piles.length) {
        // Biggest num of triplet goes to Alice
        piles.shift();
        // Second highest num of triplet goes to me
        const myNum = piles.shift();
        myCoinsTotal += myNum;
        // Third num should come from the end of the sorted arr (give smallest num to Bob)
        piles.pop();
    }

    // Return coins total
    return myCoinsTotal;
}

console.log( maxCoins([2, 4, 1, 2, 7, 8]) ); // 9
console.log( maxCoins([2, 4, 5]) ); // 4
console.log( maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]) ); // 18
