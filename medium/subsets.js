"use strict";

/**
 * solution 1 -- recursion
 * time: O(n * 2^n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    /** @type {[][]} */
    let results = [];
    let currentSubset = [];

    function dfs(i) {
        if (i >= nums.length) {
            const subsetCopy = [...currentSubset];
            results.push(subsetCopy);

            return;
        }

        // decision to include current number
        currentSubset.push(nums[i]);
        // continue to next i value
        dfs(i + 1);

        // decision to exclude current number
        currentSubset.pop();
        dfs(i + 1);
    }

    dfs(0);

    return results;
}

console.log( subsets([1,2,3]) ); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
