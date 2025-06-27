"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function distinctDifferenceArray(nums) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        const prefixValues = nums.slice(0, i + 1);
        const distinctPrefixValues = new Set(prefixValues);
        const suffixValues = nums.slice(i + 1);
        const distinctSuffixValues = new Set(suffixValues);
        const distinctValuesLengthsDiff = distinctPrefixValues.size - distinctSuffixValues.size;
        results.push(distinctValuesLengthsDiff);
    }

    return results; 
}

console.log(distinctDifferenceArray([1, 2, 3, 4, 5])); // [-3,-1,1,3,5]
console.log(distinctDifferenceArray([3, 2, 3, 4, 2])); // [-2,-1,0,2,3]
