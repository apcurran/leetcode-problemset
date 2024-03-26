"use strict";

/**
 * solution 1 -- hashmap (passes tests, but not constant space)
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
    let numsFrequencies = new Map();
    let singleFrequencyNums = [];
    // hashmap to count frequencies
    for (let num of nums) {
        const numFrequency = numsFrequencies.get(num) || 0;
        numsFrequencies.set(num, numFrequency + 1);
    }
    // iterate hashmap and add nums to results with a frequency of 1
    for (let [num, numFrequency] of numsFrequencies) {
        if (numFrequency === 1) {
            singleFrequencyNums.push(num);
        }
    }
    // return results
    return singleFrequencyNums;
}

console.log(singleNumber([1,2,1,3,2,5])); // [3, 5]
