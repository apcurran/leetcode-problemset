"use strict";

// /**
//  * solution 1 -- math
//  * time: O(1)
//  * space: O(1)
//  * 
//  * @param {number} numBottles
//  * @param {number} numExchange
//  * @return {number}
//  */
// function numWaterBottles(numBottles, numExchange) {
//     return Math.floor(numBottles + (numBottles  - 1) / (numExchange - 1));
// }

/**
 * solution 2 -- iterative
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
    let totalDrankBottles = numBottles;
    let totalEmptyBottles = numBottles;

    while (totalEmptyBottles >= numExchange) {
        const newDrinks = Math.floor(totalEmptyBottles / numExchange);
        totalDrankBottles += newDrinks;
        totalEmptyBottles = (totalEmptyBottles % numExchange) + newDrinks;
    }

    return totalDrankBottles;
}

console.log( numWaterBottles(9, 3) ); // 9 + 3 + 1 -> 13
console.log( numWaterBottles(15, 4) ); // 15 + 3 + 1 -> 19
