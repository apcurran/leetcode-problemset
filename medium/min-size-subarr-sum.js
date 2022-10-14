"use strict";

/**
 * solution 1 -- sliding window
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
    let left = 0;
    let total = 0;
    let resLen = Infinity;

    // iterate each num in nums
    for (let right = 0; right < nums.length; right++) {
        total += nums[right];

        while (total >= target) {
            const windowLen = right - left + 1;

            resLen = Math.min(resLen, windowLen);
            total -= nums[left];
            // incr left pointer
            left++;
        }
    }

    if (resLen === Infinity) return 0;

    return resLen;
}

console.log( minSubArrayLen(7, [2,3,1,2,4,3]) ); // 2 (4, 3)
