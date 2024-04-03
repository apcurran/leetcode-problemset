"use strict";

// /**
//  * solution 1 -- correct, but TLE (brute force)
//  * time: O(n * k)
//  * space: O(n + k)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function maxSlidingWindow(nums, k) {
//     let maxValues = [];

//     // iterate nums by 1 each time
//     for (let i = 0; i <= nums.length - k; i++) {
//         // check current window of length k
//         const chunk = nums.slice(i, i + k);
//         const chunkMax = getMax(chunk);
//         maxValues.push(chunkMax);
//     }

//     return maxValues;
// }

// /**
//  * @param {number[]} nums 
//  */
// function getMax(nums) {
//     let max = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         max = Math.max(max, nums[i]);
//     }

//     return max;
// }

// /**
//  * solution 2 -- correct, but TLE (brute force)
//  * time: O(n * k)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function maxSlidingWindow(nums, k) {
//     let maxValues = [];

//     // iterate nums by 1 each time
//     for (let i = 0; i <= nums.length - k; i++) {
//         // check current window of length k
//         const start = i;
//         const end = i + k;
//         const chunkMax = getMax(nums, start, end);
//         maxValues.push(chunkMax);
//     }

//     return maxValues;
// }

// /**
//  * @param {number[]} nums
//  * @param {number} start
//  * @param {number} end
//  * @returns {number}
//  */
// function getMax(nums, start, end) {
//     let max = nums[start];

//     for (let i = start + 1; i < end; i++) {
//         max = Math.max(max, nums[i]);
//     }

//     return max;
// }

/**
 * solution 3 -- deque
 * time: O(n * k)
 * space: O(n + k)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    let maxValues = [];
    let deque = [];

    // iterate nums by 1 each time
    for (let i = 0; i < nums.length; i++) {
        // remove elems in deque that are less than or equal to current value
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // remove indices of values that are outside of the current window
        if (deque[0] <= i - k) {
            deque.shift();
        }

        // if the current index reaches the window size, or greater,
        // add the max value to results
        if (i >= k - 1) {
            maxValues.push(nums[deque[0]]);
        }
    }

    return maxValues;
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
