"use strict";

/**
 * solution 1 -- map obj
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    // cache numCounts and num
    let numsCache = new Map();
    // get max numCounts num
    for (let num of nums) {
        const prevNumCount = numsCache.get(num) || 0;
        numsCache.set(num, prevNumCount + 1);
    }

    let maxNum = -Infinity;
    let maxNumCount = -Infinity;

    for (let [num, numCount] of numsCache) {
        if (numCount > maxNumCount) {
            // update max num
            maxNum = num;
            // update max num count
            maxNumCount = numCount;
        }
    }

    return maxNum;
}

console.log(majorityElement([1, 1, 1, 2, 2, 2, 2])); // 2
console.log(majorityElement([3, 2, 3])); // 3
