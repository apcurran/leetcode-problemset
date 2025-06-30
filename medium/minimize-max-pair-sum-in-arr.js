"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
function minPairSum(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    let best = 0;

    for (let i = 0; i < n; i++) {
        const minNum = nums[i];
        const maxNum = nums[n - 1 - i];

        best = Math.max(best, minNum + maxNum);
    }

    return best;
}

console.log(minPairSum([3, 5, 2, 3])); // 7
console.log(minPairSum([3, 5, 4, 2, 4, 6])); // 8
