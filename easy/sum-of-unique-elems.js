"use strict";

/**
 * solution 1 -- cache
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function sumOfUnique(nums) {
    // cache all unique vals
    let uniqueNumsMap = new Map();

    for (let num of nums) {
        const prevVal = uniqueNumsMap.get(num) || 0;
        uniqueNumsMap.set(num, prevVal + 1);
    }

    let sum = 0;

    for (let [num, numCount] of uniqueNumsMap) {
        if (numCount === 1) sum += num;
    }

    return sum;
}

console.log(sumOfUnique([1, 2, 3, 2])); // 1 + 3 = 4
console.log(sumOfUnique([1, 2, 3, 4, 5])); // [1,2,3,4,5], and the sum is 15.
console.log(sumOfUnique([1, 1, 1, 1, 1])); // [], and the sum is 0.
