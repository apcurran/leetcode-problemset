"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(log n)
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    /**
     * @param {number} x
     * @param {number} n
     * @returns {number}
     */
    function recurse(x, n) {
        if (x === 0) return 0;

        if (n === 0) return 1;

        let localRes = recurse(x, Math.floor(n / 2));
        localRes *= localRes;

        if (n % 2 !== 0) {
            return x * localRes;
        } else {
            return localRes;
        }
    }

    const res = recurse(x, Math.abs(n));

    if (n >= 0) {
        return res;
    } else {
        return 1 / res;
    }
}

console.log(myPow(2.0, 10)); // 1024.00000
