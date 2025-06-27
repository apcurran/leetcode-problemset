"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function rearrangeArray(nums) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let res = [];

    // keep going until res len is equal to nums len
    while (res.length !== nums.length) {
        const leftNum = nums[left];
        const rightNum = nums[right];

        res.push(leftNum);
        left++;

        // stop iteration when the left pointer is greater than the right pointer
        if (left > right) break;

        res.push(rightNum);
        right--;
    }

    return res;
}

console.log( rearrangeArray([1, 2, 3, 4, 5]) ); // [1,2,4,5,3]
