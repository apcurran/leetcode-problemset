"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minDifference(nums) {
    if (nums.length <= 4) {
        return 0;
    }

    nums.sort(function sortAsc(numA, numB) {
        return numA - numB;
    });
    let result = Infinity;

    for (let left = 0; left < 4; left++) {
        const right = nums.length - 4 + left;
        const difference = nums[right] - nums[left];
        result = Math.min(result, difference);
    }

    return result;
}

console.log(minDifference([5,3,2,4])); // 0
console.log(minDifference([1,5,0,10,14])); // 1
