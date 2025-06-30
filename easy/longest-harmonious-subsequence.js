"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
    let frequencies = new Map();

    for (let num of nums) {
        const numPreviousCount = frequencies.get(num) || 0;
        frequencies.set(num, numPreviousCount + 1);
    }

    let maxSubsequenceLength = 0;

    for (let [num, numCount] of frequencies) {
        const nextNum = num + 1;

        if (frequencies.has(nextNum)) {
            const nextNumCount = frequencies.get(num + 1);
            const lengthsSum = numCount + nextNumCount;
            // try to update max length
            maxSubsequenceLength = Math.max(maxSubsequenceLength, lengthsSum);
        }
    }

    return maxSubsequenceLength;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
