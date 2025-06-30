"use strict";

/**
 * solution 1
 * disregard actual number since it can be too large,
 * focus purely on the sign of the number instead
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
    let resultOneValue = 1;

    for (let num of nums) {
        if (signFunc(num) === -1) {
            resultOneValue *= -1;
        } else if (signFunc(num) === 1) {
            resultOneValue *= 1;
        } else {
            resultOneValue = 0;

            break;
        }
    }

    return resultOneValue;
}

/**
 *
 * @param {number} num
 * @returns {-1|1|0}
 */
function signFunc(num) {
    if (num < 0) {
        return -1;
    } else if (num > 0) {
        return 1;
    } else {
        return 0;
    }
}
