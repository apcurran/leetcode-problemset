"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let numFrequencies = new Map();

    for (let num of nums) {
        const previousNumFrequency = numFrequencies.get(num) || 0;
        numFrequencies.set(num, previousNumFrequency + 1);
    }

    for (let [num, numFrequency] of numFrequencies) {
        if (numFrequency > (nums.length / 2)) {
            return num;
        }
    }
}

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
