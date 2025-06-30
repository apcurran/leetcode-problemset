"use strict";

/**
 * solution 1
 * time: O(2^n)
 * space: O(n)
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    let results = [];

    /**
     * @param {number} i
     * @param {number[]} currentCombo
     * @param {number} total
     */
    function dfs(i, currentCombo, total) {
        if (total === target) {
            results.push(currentCombo.slice());

            return;
        }

        if (i >= candidates.length || total > target) {
            return;
        }

        currentCombo.push(candidates[i]);
        dfs(i, currentCombo, total + candidates[i]);
        currentCombo.pop();
        dfs(i + 1, currentCombo, total);
    }

    dfs(0, [], 0);

    return results;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
