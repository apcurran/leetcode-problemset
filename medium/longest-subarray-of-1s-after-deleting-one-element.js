"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function longestSubarray(nums) {
    let leftPointer = 0;
    let windowZerosCount = 0;
    let longestOnesWindowCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (currentNum === 0) {
            windowZerosCount += 1;
        }

        // shrink the window until the zero count is less than 2
        while (windowZerosCount > 1) {
            const leftNum = nums[leftPointer];

            if (leftNum === 0) {
                windowZerosCount -= 1;
            }

            leftPointer += 1;
        }

        const currentWindowOnesCount = i - leftPointer;
        longestOnesWindowCount = Math.max(longestOnesWindowCount, currentWindowOnesCount);
    }

    return longestOnesWindowCount;
}

console.log( longestSubarray([1,1,0,1]) ); // 3
console.log( longestSubarray([0,1,1,1,0,1,1,0,1]) ); // 5
