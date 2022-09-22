"use strict";

/**
 * solution 1 -- DP
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    let rob1 = 0;
    let rob2 = 0;

    // [rob1, rob2, n, n + 1, ...]
    for (let num of nums) {
        const temp = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2;
}

console.log( rob([1, 2, 3, 1]) ); // 4
