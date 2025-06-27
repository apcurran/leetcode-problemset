"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n) -- set
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums) {
    let seenNums = new Set();
    let sneakyNums = [];

    for (let num of nums) {
        if (seenNums.has(num)) {
            sneakyNums.push(num);
        }

        seenNums.add(num);
    }

    return sneakyNums;
}

console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])); // [2, 3]
