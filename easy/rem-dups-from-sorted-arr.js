"use strict";
/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let slowPointer = 1;

    for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
        if (nums[fastPointer] !== nums[fastPointer - 1]) {
            nums[slowPointer] = nums[fastPointer];
            // incr left pointer
            slowPointer++;
        }

        // fastPointer will always incr with for loop
    }

    return slowPointer;
}

console.log( removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) ); // 5, nums = [0,1,2,3,4,_,_,_,_,_]
