"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function rearrangeArray(nums) {
//     const posElems = nums.filter((num) => num > 0);
//     const negElems = nums.filter((num) => num <= 0);
//     let resArr = [];

//     for (let i = 0; i < posElems.length; i++) {
//         const posElem = posElems[i];
//         const negElem = negElems[i];
//         resArr.push(posElem, negElem);
//     }

//     return resArr;
// }

/**
 * solution 2 -- pre-filled array
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function rearrangeArray(nums) {
    let results = new Array(nums.length).fill(0);
    let positiveValuesIndex = 0;
    let negativeValuesIndex = 1;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (current > 0) {
            // positive
            results[positiveValuesIndex] = current;
            positiveValuesIndex += 2;
        } else {
            // negative
            results[negativeValuesIndex] = current;
            negativeValuesIndex += 2;
        }
    }

    return results;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3, -2, 1, -5, 2, -4]
console.log(rearrangeArray([-1, 1])); // [1, -1]
