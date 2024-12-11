"use strict";

/**
 * solution 1 -- brute force (TLE on the last test!)
 * n = nums length
 * m = queries length
 * b = badIndices length
 * time: O(n + (m * b))
 * space: O(1) -- excluding results
 * 
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function isArraySpecial(nums, queries) {
    let badIndices = [];

    for (let i = 0; i < nums.length - 1; i++) {
        // if both nums are even OR
        // both nums are odd (no differing parity)
        if ((nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) || (nums[i] % 2 !== 0 && nums[i + 1] % 2 !== 0)) {
            badIndices.push(i);
        }
    }

    let results = [];

    for (let [queryStart, queryEnd] of queries) {
        let found = false;
        
        for (let index of badIndices) {
            if (index >= queryEnd) {
                results.push(true);
                found = true;

                break;
            }

            if (index < queryEnd && index >= queryStart) {
                results.push(false);
                found = true;

                break;
            }
        }

        if (!found) results.push(true);
    }

    return results;
}

console.log(isArraySpecial([4,3,1,6], [[0,2],[2,3]])); // [false, true]
