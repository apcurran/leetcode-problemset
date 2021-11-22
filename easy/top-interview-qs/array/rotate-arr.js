"use strict";

/**
 * NOTE: functional, but too slow
 * @param {array} nums 
 * @param {number} k 
 * @returns {array}
 */
function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        const endNum = nums.pop();
        nums.unshift(endNum);
    }

    return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3)); //  [5,6,7,1,2,3,4]
