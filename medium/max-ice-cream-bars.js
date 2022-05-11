"use strict";

/**
 * solution 1
 * time: O(n * log n) -- sorting
 * space: O(1)
 * 
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
function maxIceCream(costs, coins) {
    // sort costs arr by smallest to largest order
    costs.sort((a, b) => a - b);
    let barCount = 0;
    // start with buying the least expensive bars first
    for (let barCost of costs) {
        // subtract bar cost from coins num
        const possibleTotalCoins = coins - barCost;

        if (possibleTotalCoins >= 0) {
            barCount++;
            coins = possibleTotalCoins;
            continue;
        }
        // too expensive
        break;
    }

    return barCount;
}

console.log( maxIceCream([1,3,2,4,1], 7) ); // 4
console.log( maxIceCream([10,6,8,7,7,8], 5) ); // 0
console.log( maxIceCream([1,6,3,1,2,5], 20) ); // 6
