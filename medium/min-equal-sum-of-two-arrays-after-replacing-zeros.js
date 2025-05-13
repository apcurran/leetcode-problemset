"use strict";

/**
 * solution 1
 * n = nums 1 length
 * m = nums 2 length
 * time: O(n + m)
 * space: O(1)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minSum(nums1, nums2) {
    let sum1 = 0;
    let zero1 = 0;

    let sum2 = 0;
    let zero2 = 0;

    for (let val of nums1) {
        // add to total
        sum1 += val;

        if (val === 0) {
            // if zero, then
            sum1++;
            zero1++;
        }
    }

    for (let val of nums2) {
        sum2 += val;

        if (val === 0) {
            sum2++;
            zero2++;
        }
    }

    // there is not at least one zero in both arrays
    if ((zero1 === 0 && sum2 > sum1) || (zero2 === 0 && sum1 > sum2)) {
        return -1;
    }

    return Math.max(sum1, sum2);
}

console.log(minSum([3,2,0,1,0], [6,5,0])); // 12
