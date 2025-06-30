"use strict";

/**
 * solution 1 -- greedy
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
    let minJumpsCount = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length - 1) {
        let farthestJumpable = 0;

        for (let i = left; i < right + 1; i++) {
            const farthestToJump = i + nums[i];
            farthestJumpable = Math.max(farthestJumpable, farthestToJump);
        }

        left = right + 1;
        right = farthestJumpable;
        minJumpsCount++;
    }

    return minJumpsCount;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
