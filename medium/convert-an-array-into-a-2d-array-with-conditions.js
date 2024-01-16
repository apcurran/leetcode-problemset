"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function findMatrix(nums) {
    let frequencies = new Array(nums.length + 1).fill(0);
    let results = [];

    for (let num of nums) {
        if (frequencies[num] >= results.length) {
            // add a new empty subarray to results
            results.push([]);
        }

        const numFreq = frequencies[num];
        results[numFreq].push(num);
        frequencies[num] += 1;
    }

    return results;
}

console.log(findMatrix([1,3,4,1,2,3,1]));
// [[1,3,4,2], [1,3], [1]]
