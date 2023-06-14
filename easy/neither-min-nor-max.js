"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findNonMinOrMax(nums) {
    // cannot find a non-min and non-max num
    if (nums.length <= 2) return -1;

    let min = Infinity;
    let max = -Infinity;

    for (let currentNum of nums) {
        if (currentNum < min) {
            min = currentNum;
        }

        if (currentNum > max) {
            max = currentNum;
        }
    }

    for (let currentNum of nums) {
        if (currentNum !== min && currentNum !== max) {
            return currentNum;
        }
    }
}

console.log( findNonMinOrMax([3,2,1,4]) ); // 2 or 3
console.log( findNonMinOrMax([1,2]) ); // -1
console.log( findNonMinOrMax([2,1,3]) ); // 2
