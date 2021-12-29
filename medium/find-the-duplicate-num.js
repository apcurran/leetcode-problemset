"use strict";

/**
 * Restriction -- must only use constant space and cannot modify original nums arr
 * 
 * Time: O(n^2)
 * Space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    let duplicateCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const currNumToCheck = nums[i];

        for (let j = 0; j < nums.length; j++) {
            const currInnerNum = nums[j];

            if (currInnerNum === currNumToCheck) {
                duplicateCount++;
            }

            if (duplicateCount > 1) {
                return currNumToCheck;
            }
        }

        duplicateCount = 0;
    }
}

console.log( findDuplicate([1, 3, 4, 2, 2], ) ); // 2
console.log( findDuplicate([3, 1, 3, 4, 2], ) ); // 3
