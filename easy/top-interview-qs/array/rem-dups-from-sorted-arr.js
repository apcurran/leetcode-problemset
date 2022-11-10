"use strict";

/**
 * solution 1 -- sliding window technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let insertIndex = 1;

    for (let i = 1; i < nums.length; i++) {
        const currNum = nums[i];
        const prevNum = nums[i - 1];

        if (prevNum === currNum) continue;

        // otherwise
        nums[insertIndex] = currNum;
        insertIndex++;
    }

    return insertIndex;
}

console.log( removeDuplicates([1, 1, 2]) ); // 2 -> nums = [1, 2, _]
