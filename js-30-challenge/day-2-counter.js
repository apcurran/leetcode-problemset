"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {function}
 */
function createCounter(n) {
    return function incrementer() {
        return n++;
    };
}
