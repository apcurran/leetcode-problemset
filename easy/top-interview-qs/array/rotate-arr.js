"use strict";

// /**
//  * NOTE: functional, but too slow
//  * @param {array} nums 
//  * @param {number} k 
//  * @returns {array}
//  */
// function rotate(nums, k) {
//     for (let i = 0; i < k; i++) {
//         const endNum = nums.pop();
//         nums.unshift(endNum);
//     }

//     return nums;
// }

/**
 * Solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {array} nums - array of num elems
 * @param {number} k - steps to rotate
 * @returns {array} - final rotated array
 */
function rotate(nums, k) {
    k %= nums.length;
    // Reverse initial arr
    reverse(nums, 0, nums.length - 1);
    // Reverse first k elems
    reverse(nums, 0, k - 1);
    // Reverse leftover elems after first k elems
    reverse(nums, k, nums.length - 1);

    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        // Swap vals
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start++;
        end--;
    }
}

console.log( rotate([1, 2, 3, 4, 5, 6, 7], 3) ); //  [5, 6, 7, 1, 2, 3, 4]
console.log( rotate([-1, -100, 3, 99], 2) ); //  [3, 99, -1, -100]
