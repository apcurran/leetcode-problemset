"use strict";

/**
 * solution 1 -- recursion and hashset cache
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums, count = 0) {
    if (isDistinct(nums)) {
        return count;
    }

    // otherwise, remove first 3 elems
    const chunk = nums.slice(3);

    return minimumOperations(chunk, count + 1);
}

/**
 * @param {number[]} arr 
 * @returns {boolean}
 */
function isDistinct(arr) {
    let seenNums = new Set();

    for (let num of arr) {
        if (seenNums.has(num)) {
            return false;
        }

        seenNums.add(num);
    }

    return true;
}

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])); // 2
console.log(minimumOperations([4, 5, 6, 4, 4])); // 2
console.log(minimumOperations([6, 7, 8, 9])); // 0
