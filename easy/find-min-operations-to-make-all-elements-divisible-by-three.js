"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
    let counter = 0;

    for (let num of nums) {
        if (num % 3 !== 0) {
            // if not divisible by 3 already,
            // it will take exactly 1 operation to make it divisible by 3
            counter++;
        }
    }

    return counter;
}

console.log(minimumOperations([1,2,3,4])); // 3
