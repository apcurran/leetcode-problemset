"use strict";

/**
 * solution 1 -- bottom-up dynamic programming
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function minSteps(n) {
    let dp = new Array(n + 1).fill(1000);
    dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= i / 2; j++) {
            if (i % j === 0) {
                dp[i] = Math.min(dp[i], dp[j] + i / j);
            }            
        }
    }

    return dp[n];
}

console.log(minSteps(3)); // 3
console.log(minSteps(1)); // 0
