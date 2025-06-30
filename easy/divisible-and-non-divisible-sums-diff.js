"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function differenceOfSums(n, m) {
    let nonDivisibleNumsSum = 0;
    let divisibleNumsSum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            nonDivisibleNumsSum += i;
        } else {
            divisibleNumsSum += i;
        }
    }

    return nonDivisibleNumsSum - divisibleNumsSum;
}

console.log(differenceOfSums(10, 3)); // 19
console.log(differenceOfSums(5, 6)); // 15
