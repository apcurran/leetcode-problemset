"use strict";

/**
 * solution 1
 * n = nums length
 * m = num binary str length
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function sumIndicesWithKSetBits(nums, k) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const numIndexBinaryStr = i.toString(2);
        let binaryOnesDigitCount = 0;

        for (let digitStr of numIndexBinaryStr) {
            if (digitStr === "1") binaryOnesDigitCount++;
        }

        if (binaryOnesDigitCount === k) {
            sum += nums[i];
        }
    }

    return sum;
}

console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1)); // 13
console.log(sumIndicesWithKSetBits([4,3,2,1], 2)); // 1
