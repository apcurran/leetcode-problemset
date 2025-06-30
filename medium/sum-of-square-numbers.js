"use strict";

/**
 * solution 1 -- hashset
 * time: O(sqrt(c))
 * space: O(sqrt(c));
 *
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
    let squareRoots = new Set();

    for (let i = 0; i <= Math.sqrt(c); i++) {
        const square = i * i;
        squareRoots.add(square);
    }

    let a = 0;

    while (a * a <= c) {
        const target = c - a * a;

        if (squareRoots.has(target)) {
            return true;
        }

        a++;
    }

    return false;
}

console.log(judgeSquareSum(5)); // true
console.log(judgeSquareSum(3)); // false
