"use strict";

// /**
//  * solution 1 -- iterative
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {number[]} prices
//  * @return {number[]}
//  */
// function finalPrices(prices) {
//     return prices.map((ogPrice, outerIndex) => {
//         for (let j = outerIndex + 1; j < prices.length; j++) {
//             const possibleDiscount = prices[j];

//             if (possibleDiscount <= ogPrice) {
//                 return ogPrice - possibleDiscount;
//             }
//         }

//         return ogPrice;
//     });
// }

/**
 * solution 2 -- monotonic stack
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
    let results = [...prices];
    let stack = []; // indices, values are increasing

    for (let i = 0; i < prices.length; i++) {
        // while stack has a length greater than 0 AND
        // the top of the stack is greater than or equal to the current price
        while (
            stack.length > 0 &&
            prices[stack[stack.length - 1]] >= prices[i]
        ) {
            const jIndex = stack.pop();
            results[jIndex] -= prices[i];
        }

        stack.push(i);
    }

    return results;
}

console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
