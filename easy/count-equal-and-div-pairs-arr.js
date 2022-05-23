"use strict";

/**
 * solution 1 -- nested loops
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function countPairs(nums, k) {
    let pairsCount = 0;
    // iterate nums arr
    for (let i = 0; i < nums.length; i++) {
        const outerNum = nums[i];

        // iterate nums arr again
        for (let j = i + 1; j < nums.length; j++) {
            const innerNum = nums[j];

            if (outerNum !== innerNum) continue;

            // equal nums
            const indexProd = i * j;

            // is product div by 2?
            if (indexProd % k === 0) pairsCount++;
        }
    }

    return pairsCount;
}

console.log( countPairs([3, 1, 2, 2, 2, 1, 3], 2) ); // 4
console.log( countPairs([1, 2, 3, 4], 1) ); // 0
