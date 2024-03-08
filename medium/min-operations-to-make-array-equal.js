"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function minOperations(n) {
    let operationsCount = 0;

    for (let i = 0; i < n / 2; i++) {
        const currentOperations = n - ((2 * i) + 1);
        operationsCount += currentOperations;
    }

    return operationsCount;
}

console.log(minOperations(3)); // 2
console.log(minOperations(6)); // 9
