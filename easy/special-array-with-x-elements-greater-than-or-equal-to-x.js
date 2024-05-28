"use strict";

/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function specialArray(nums) {
    for (let x = 1; x <= nums.length; x++) {
        let counter = 0;

        for (let num of nums) {
            if (num >= x) {
                counter++;
            }
        }

        if (counter === x) {
            return counter;
        }
    }

    // not found
    return -1;
}

console.log(specialArray([0,4,3,0,4])); // 3
