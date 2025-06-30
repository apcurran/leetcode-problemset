"use strict";

/**
 * solution 1 (simulation)
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} derived
 * @return {boolean}
 */
function doesValidArrayExist(derived) {
    let first = 0;
    let last = 0;

    for (let num of derived) {
        if (num === 1) {
            last = ~last;
        }
    }

    return first === last;
}

console.log(doesValidArrayExist([1, 1, 0])); // true
console.log(doesValidArrayExist([1, 1])); // true
console.log(doesValidArrayExist([1, 0])); // false
