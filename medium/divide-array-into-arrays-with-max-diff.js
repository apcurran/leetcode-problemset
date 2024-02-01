"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
function divideArray(nums, k) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });
    let results = [];

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) {
            return [];
        }

        const chunk = nums.slice(i, i + 3);
        results.push(chunk);
    }

    return results;
}

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)); // [[1,1,3], [3,4,5], [7,8,9]]
