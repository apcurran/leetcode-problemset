"use strict";

/**
 * solution 1 -- brute force
 * n = nums1 length
 * m = nums2 length
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function numberOfPairs(nums1, nums2, k) {
    let goodCounter = 0;

    for (let i = 0; i < nums1.length; i++) {
        const num1Value = nums1[i];

        for (let j = 0; j < nums2.length; j++) {
            const num2Value = nums2[j];
            const goodMultiplier = num2Value * k;

            if (num1Value % goodMultiplier === 0) {
                goodCounter++;
            }
        }
    }

    return goodCounter;
}

console.log(numberOfPairs([1,3,4], [1,3,4], 1)); // 5
