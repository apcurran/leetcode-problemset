"use strict";

/**
 * Solution 1
 * 
 * nums1 = n
 * nums2 = m
 * 
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    let resArr = [];
    // Iterate through nums1, checking each val
    for (let num of nums1) {
        // For each val in nums1, look for the same val in nums2
        const nums2ValIndex = nums2.findIndex((val) => val === num);
        const nums2Val = nums2[nums2ValIndex];
        // After finding the same val in nums2, check for the next greater elem
        const nextGreaterVal = nums2.find((elem, index) => {
            return elem > nums2Val && index > nums2ValIndex;
        });
        if (!nextGreaterVal) {
            // If not, then add -1 to res arr
            resArr.push(-1);
        } else {
            // If this greater elem exists in nums2, add it to res arr
            resArr.push(nextGreaterVal);
        }
    }

    // Return res arr
    return resArr;
}

console.log( nextGreaterElement([4, 1, 2], [1, 3, 4, 2]) ); // [-1,3,-1]
console.log( nextGreaterElement([2, 4], [1, 2, 3, 4]) ); // [3,-1]
