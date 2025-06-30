"use strict";

/**
 * solution 1 -- iterative
 * n = num of digits in n
 * time: O(n^2)
 * space: O(n) -- due to set
 *
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
    let visitedNumsSet = new Set();

    while (!visitedNumsSet.has(n)) {
        visitedNumsSet.add(n);
        n = sumOfSquares(n);

        if (n === 1) return true;
    }

    return false;
}

/**
 * @param {number} num
 */
function sumOfSquares(num) {
    let resSum = 0;

    while (num) {
        let digitSquared = (num % 10) ** 2;
        resSum += digitSquared;
        // update num
        num = Math.floor(num / 10);
    }

    return resSum;
}

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
