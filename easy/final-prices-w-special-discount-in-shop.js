"use strict";

/**
 * solution 1 -- iterative
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} prices
 * @return {number[]}
 */
function finalPrices(prices) {
    return prices.map((ogPrice, outerIndex) => {
        for (let j = outerIndex + 1; j < prices.length; j++) {
            const possibleDiscount = prices[j];
            
            if (possibleDiscount <= ogPrice) {
                return ogPrice - possibleDiscount;
            }
        }

        return ogPrice;
    });
}

console.log( finalPrices([8,4,6,2,3]) ); // [4,2,4,2,3]
