"use strict";

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(k)
 * 
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function canArrange(arr, k) {
    let remainderCounts = new Map();

    // store count of remainders
    for (let num of arr) {
        const remainder = ((num % k) + k) % k;
        const previousCount = remainderCounts.get(remainder) || 0;
        remainderCounts.set(remainder, previousCount + 1);
    }

    for (let num of arr) {
        const remainder = ((num % k) + k) % k;

        // remainder 0? count of nums must be even
        if (remainder === 0) {
            const isOdd = remainderCounts.get(remainder) % 2 === 1;

            if (isOdd) return false;
        } else if (remainderCounts.get(remainder) !== remainderCounts.get(k - remainder)) {
            return false;
        }
    }

    return true;
}

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)); // true
console.log(canArrange([1, 2, 3, 4, 5, 6], 7)); // true
console.log(canArrange([1, 2, 3, 4, 5, 6], 10)); // false
