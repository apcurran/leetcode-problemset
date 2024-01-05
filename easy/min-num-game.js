"use strict";

// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function numberGame(nums) {
//     let results = [];
//     // iterate nums
//     while (nums.length > 0) {
//         // alice
//         const [aliceMinValue, aliceMinIndex] = getMinValueAndIndex(nums);
//         // modify arr
//         nums.splice(aliceMinIndex, 1);
//         // bob
//         const [bobMinValue, bobMinIndex] = getMinValueAndIndex(nums);
//         // modify arr
//         nums.splice(bobMinIndex, 1);
//         // update results
//         results.push(bobMinValue, aliceMinValue);
//     }

//     return results;
// }

// /**
//  * @param {number[]} arr 
//  * @returns {[number, number]} [minValue, minIndex]
//  */
// function getMinValueAndIndex(arr) {
//     let min = arr[0];
//     let minIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             // update min num
//             min = arr[i];
//             // update min index
//             minIndex = i;
//         }
//     }

//     return [min, minIndex];
// }

/**
 * solution 2 -- sorting
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function numberGame(nums) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });

    let results = [];
    // iterate by pairs
    for (let i = 0; i < nums.length - 1; i += 2) {
        const aliceNum = nums[i];
        const bobNum = nums[i + 1];
        results.push(bobNum, aliceNum);
    }

    return results;
}

console.log(numberGame([5,4,2,3])); // [3,2,5,4]
