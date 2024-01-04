"use strict";

/**
 * solution 1 -- math reasoning & counting occurrences
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number} min ops or -1 if not possible
 */
function minOperations(nums) {
    let numCounts = new Map();

    for (let num of nums) {
        const previousNumCount = numCounts.get(num) || 0;
        numCounts.set(num, previousNumCount + 1);
    }

    let minOpsCount = 0;

    for (let numTuple of numCounts) {
        const numCount = numTuple[1];

        if (numCount === 1) return -1;

        minOpsCount += Math.ceil(numCount / 3);
    }

    return minOpsCount;
}

console.log(minOperations([2,3,3,2,2,4,2,3,4])); // 4
