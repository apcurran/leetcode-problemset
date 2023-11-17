"use strict";

/**
 * solution 1
 * time: O(n^3)
 * space: O(1)
 * 
 * @param {number} totalCandies
 * @param {number} candyLimit
 * @return {number}
 */
function distributeCandies(totalCandies, candyLimit) {
    let combosCount = 0;

    for (let i = 0; i <= candyLimit; i++) {
        for (let j = 0; j <= candyLimit; j++) {
            for (let k = 0; k <= candyLimit; k++) {
                const currentCandiesSum = i + j + k;

                if (currentCandiesSum === totalCandies) combosCount++;
            }
        }
    }

    return combosCount;
}

console.log(distributeCandies(5, 2)); // 3
