"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
    let numCounts = new Map();

    for (let num of nums) {
        const previousNumCount = numCounts.get(num) || 0;
        numCounts.set(num, previousNumCount + 1);
    }

    const theSpecialValue = nums.length / 3;
    let results = [];

    for (let [num, numCount] of numCounts) {
        if (numCount > theSpecialValue) {
            results.push(num);
        }
    }

    return results;
}

console.log(majorityElement([3, 2, 3])); // [3]
console.log(majorityElement([1, 2])); // [1,2]
