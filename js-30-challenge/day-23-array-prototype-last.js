"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @returns {number}
 */
Array.prototype.last = function () {
    if (this.length === 0) return -1;

    return this[this.length - 1];
};

const arr = [1, 2, 3];
console.log( arr.last() ); // 3
