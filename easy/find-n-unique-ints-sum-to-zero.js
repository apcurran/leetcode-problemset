"use strict";

/**
 * solution 1 -- for loop
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
    let resArr = [];

    if (n % 2 !== 0) {
        // if odd, append 0
        resArr.push(0);
    }

    for (let i = 1; i <= n / 2; i++) {
        resArr.push(i, -i);
    }

    return resArr;
}

console.log(sumZero(5));
