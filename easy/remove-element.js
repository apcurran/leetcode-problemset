"use strict";

/**
 * O(n)
 * @param {number[]} nums
 * @param {number} val
 * @return {number} k - elements left after removal of val from nums arr
 */
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }

    if (nums.includes(val)) {
        // Recursively call removeElement func to handle leftover nums equal to val
        return removeElement(nums, val);
    }

    return nums.length;
}

console.log( removeElement([3,2,2,3], 3) ); // 2 elems [2,2,_,_]
console.log( removeElement([0,1,2,2,3,0,4,2], 2) ); // 5 elems [0,1,4,0,3,_,_,_]