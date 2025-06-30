"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {any[]} args
 * @return {number}
 */
function argumentsLength(...args) {
    return args.length;
}

console.log(argumentsLength(1, 2, 3)); // 3
