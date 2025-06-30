"use strict";

/**
 * solution 1 -- backtracking
 * time: O(n^2 * 2^n)
 * space: O(n)
 *
 * @param {string} s
 * @return {number}
 */
function maxUniqueSplit(s) {
    /**
     * @param {number} i
     * @param {Set} currSet
     * @returns {number}
     */
    function dfs(i, currSet) {
        if (i === s.length) return 0;

        let result = 0;

        for (let j = i; j < s.length; j++) {
            const subStr = s.slice(i, j + 1); // including j

            if (currSet.has(subStr)) continue;

            // update set
            currSet.add(subStr);
            const value = 1 + dfs(j + 1, currSet);
            // possible update to result
            result = Math.max(result, value);
            // remove from set
            currSet.delete(subStr);
        }

        return result;
    }

    return dfs(0, new Set());
}

console.log(maxUniqueSplit("ababccc")); // 5 -> ['a', 'b', 'ab', 'c', 'cc']
