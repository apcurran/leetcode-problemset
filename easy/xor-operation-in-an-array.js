"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n, start) {
    let xorValue = 0;

    for (let i = 0; i < n; i++) {
        xorValue ^= start + 2 * i;
    }

    return xorValue;
}

console.log(xorOperation(5, 0)); // 8
