"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(1)
 * 
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if (n % 3 === 0) {
            n /= 3;
        } else if (n % 5 === 0) {
            n /= 5;
        } else {
            return false;
        }
    }

    return n > 0;
}

console.log( isUgly(6) ); // true
console.log( isUgly(1) ); // true
console.log( isUgly(14) ); // false
console.log( isUgly(8) ); // true
