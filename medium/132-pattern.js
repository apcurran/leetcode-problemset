"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
    let stack = [];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        while (stack.length > 0 && num >= stack[stack.length - 1][0]) {
            stack.pop();
        }

        if (stack.length > 0 && num > stack[stack.length - 1][1]) {
            return true;
        }

        stack.push([num, currentMin]);
        currentMin = Math.min(currentMin, num);
    }

    return false;
}

console.log(find132pattern([1, 2, 3, 4])); // false
console.log(find132pattern([3, 1, 4, 2])); // true
