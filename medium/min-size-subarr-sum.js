"use strict";

// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(n^2)
//  * space: O(1)
//  * 
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// function minSubArrayLen(target, nums) {
//     let smallestSubarrLength = Infinity;

//     outerLoop: for (let i = 0; i < nums.length; i++) {
//         let currentSum = 0;

//         for (let j = i; j < nums.length; j++) {
//             const currentNum = nums[j];
//             currentSum += currentNum;

//             if (currentSum >= target) {
//                 // record subarr length
//                 const currentSubarrLength = j - i + 1;
//                 smallestSubarrLength = Math.min(smallestSubarrLength, currentSubarrLength);
//                 // skip rest of inner loop (it will only grow the current subarray length)
//                 continue outerLoop;
//             }
//         }
//     }

//     return smallestSubarrLength === Infinity ? 0 : smallestSubarrLength;
// }

/**
 * solution 2 -- sliding window
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
console.log( minSubArrayLen(4, [1,4,4]) ); // 1
console.log( minSubArrayLen(11, [1,1,1,1,1,1,1,1]) ); // 0
