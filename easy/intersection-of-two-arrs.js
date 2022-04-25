"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    // create an empty result shared set
    let resSet = new Set();
    // iterate nums1 arr
    for (let num of nums1) {
        // check if nums2 arr includes curr num
        if (nums2.includes(num)) {
            // if yes, add num to set
            resSet.add(num);
        }
    }

    // return set converted to arr for res
    return [...resSet];
}

console.log( intersection([1, 2, 2, 1], [2, 2]) ); // [2]
console.log( intersection([4, 9, 5], [9, 4, 9, 8, 4]) ); // [9, 4]
