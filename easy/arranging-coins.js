"use strict";

/**
 * solution 1 -- bin search
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
    let left = 1;
    let right = n;

    let result = 0;

    while (left <= right) {
        // row to currently consider
        const mid = Math.floor(left + (right - left) / 2);
        // gauss's summation formula
        const coins = (mid / 2) * (mid + 1);

        if (coins > n) {
            // update right pointer
            right = mid - 1;
        } else {
            // update left pointer
            left = mid + 1;
            result = Math.max(result, mid);
        }
    }

    return result;
}

console.log(arrangeCoins(5)); // 2
