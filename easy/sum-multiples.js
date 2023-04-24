"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {number}
 */
function sumOfMultiples(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log( sumOfMultiples(7) ); // 3 + 5 + 6 + 7 -> 21
