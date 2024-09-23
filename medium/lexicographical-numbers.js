"use strict";

/**
 * solution 1 -- recursive dfs
 * time: O(n)
 * space: O(log base10 (n))
 * 
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n) {
    let results = [];

    function dfs(current) {
        if (current > n) return;

        results.push(current);
        const currentAdjusted = current * 10;

        for (let nextDigit = 0; nextDigit <= 9; nextDigit++) {
            dfs(currentAdjusted + nextDigit);
        }
    }

    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }

    return results;
}

console.log(lexicalOrder(13)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
