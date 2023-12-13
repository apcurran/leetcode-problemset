"use strict";

/**
 * solution 1
 * n = nums1 length
 * m = nums2 length
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function findIntersectionValues(nums1, nums2) {
    let num1CommonCount = 0;
    let num2CommonCount = 0;

    for (let num of nums1) {
        const isValueInNums2 = nums2.includes(num);

        if (isValueInNums2) num1CommonCount++;
    }

    for (let num of nums2) {
        const isValueInNums1 = nums1.includes(num);

        if (isValueInNums1) num2CommonCount++;
    }

    return [num1CommonCount, num2CommonCount];
}

console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6])); // [3, 4]
console.log(findIntersectionValues([3,4,2,3], [1,5])); // [0, 0]
