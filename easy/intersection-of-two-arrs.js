"use strict";

// /**
//  * solution 1
//  * time: O(n * m)
//  * space: O(n) || O(m) -- smaller of two arrs
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// function intersection(nums1, nums2) {
//     // create an empty result shared set
//     let resSet = new Set();
//     // iterate nums1 arr
//     for (let num of nums1) {
//         // check if nums2 arr includes curr num
//         if (nums2.includes(num)) {
//             // if yes, add num to set
//             resSet.add(num);
//         }
//     }

//     // return set converted to arr for res
//     return [...resSet];
// }

// /**
//  * solution 2 -- hashsets
//  * time: O(n + m)
//  * space: O(n + m)
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// function intersection(nums1, nums2) {
//     const nums1Set = new Set(nums1);
//     const nums2Set = new Set(nums2);
//     let sharedValues = [];

//     for (let num1Value of nums1Set) {
//         if (nums2Set.has(num1Value)) {
//             sharedValues.push(num1Value);
//         }
//     }

//     return sharedValues;
// }

/**
 * solution 3 -- hashsets
 * time: O(n + m)
 * space: O(x)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    let seenValues = new Set(nums1);
    let sharedValues = [];

    for (let num of nums2) {
        if (seenValues.has(num)) {
            sharedValues.push(num);
            // remove, so we do not add the value twice
            seenValues.delete(num);
        }
    }

    return sharedValues;
}

// /**
//  * solution 4 -- hashsets (with intersection method)
//  * time: O(n + m)
//  * space: O(x)
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// function intersection(nums1, nums2) {
//     const nums1Set = new Set(nums1);
//     const nums2Set = new Set(nums2);

//     return [...nums1Set.intersection(nums2Set)];
// }

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
