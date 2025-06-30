"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
function theMaximumAchievableX(num, t) {
    return num + t + t;
}

console.log(theMaximumAchievableX(4, 1)); // 6
