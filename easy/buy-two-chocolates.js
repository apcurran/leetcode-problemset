"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number[]} prices
//  * @param {number} money
//  * @return {number}
//  */
// function buyChoco(prices, money) {
//     let lowestChocoTotal = prices[0] + prices[1];

//     for (let i = 0; i < prices.length; i++) {
//         const chocoOne = prices[i];

//         for (let j = i + 1; j < prices.length; j++) {
//             const chocoTwo = prices[j];
//             const chocoTotal = chocoOne + chocoTwo;

//             if (chocoTotal <= money) {
//                 lowestChocoTotal = Math.min(lowestChocoTotal, chocoTotal);
//             }
//         }
//     }

//     const leftOverMoney = money - lowestChocoTotal;

//     if (leftOverMoney >= 0) {
//         return leftOverMoney;
//     } else {
//         return money;
//     }
// }

// /**
//  * solution 2 -- sort
//  * time: O(n * log n)
//  * space: O(n) -- Array.prototype.sort()
//  * 
//  * @param {number[]} prices
//  * @param {number} money
//  * @return {number}
//  */
// function buyChoco(prices, money) {
//     prices.sort((a, b) => a - b);

//     const lowestChocoTotal = prices[0] + prices[1];
//     const leftOverMoney = money - lowestChocoTotal;

//     if (leftOverMoney >= 0) {
//         return leftOverMoney;
//     } else {
//         return money;
//     }
// }

/**
 * solution 3 -- two min nums
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
function buyChoco(prices, money) {
    let minChoco1 = Infinity;
    let minChoco2 = Infinity;

    for (let i = 0; i < prices.length; i++) {
        const choco = prices[i];

        if (choco < minChoco1) {
            minChoco2 = minChoco1;
            minChoco1 = choco;
        } else if (choco < minChoco2) {
            minChoco2 = choco;
        }
    }

    const leftOverMoney = money - (minChoco1 + minChoco2);

    if (leftOverMoney >= 0) {
        return leftOverMoney;
    } else {
        return money;
    }
}

console.log(buyChoco([1, 2, 2], 3)); // 0
console.log(buyChoco([3, 2, 3], 3)); // 3
console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62)); // 22
console.log(buyChoco([95, 88, 91, 60, 98, 6, 73, 16, 53, 50], 22)); // 0
