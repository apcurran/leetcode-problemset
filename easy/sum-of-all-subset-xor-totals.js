"use strict";

/**
 * solution 1 -- DFS (recursion)
 * time: O(2^n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function subsetXORSum(nums) {
    /**
     * @param {number} i 
     * @param {number} total 
     * @returns {number}
     */
    function dfs(i, total) {
        if (i === nums.length) {
            return total;
        }

        const updatedTotal = total ^ nums[i];
        const includeCurrentNumTotal = dfs(i + 1, updatedTotal); // include current num
        const excludeCurrentNumTotal = dfs(i + 1, total); // exclude current num

        return includeCurrentNumTotal + excludeCurrentNumTotal;
    }

    return dfs(0, 0);
}

console.log(subsetXORSum([1, 3])); // 6
console.log(subsetXORSum([5, 1, 6])); // 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // 480
