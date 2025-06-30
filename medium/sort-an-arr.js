"use strict";

// /**
//  * Solution 1 -- Quicksort ES6
//  * Time: O(n^2)
//  * Space: O(n^2)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortArray(nums) {
//     if (nums.length <= 1) return nums;

//     const arrCopy = [...nums];
//     const pivot = arrCopy[arrCopy.length - 1]; // Choose last elem
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arrCopy.length - 1; i++) {
//         const currNum = arrCopy[i];

//         if (currNum < pivot) {
//             left.push(currNum);
//         } else {
//             right.push(currNum);
//         }
//     }

//     return [...sortArray(left), pivot, ...sortArray(right)];
// }

// /**
//  * Solution 2 -- built-in array.sort() method
//  * Time: O(n log n)
//  * Space: O(1)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortArray(nums) {
//     return nums.sort((a, b) => a - b);
// }

// /**
//  * Solution 2 -- recursive
//  * Time: O(n^2)
//  * Space: O(n^2)
//  *
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortArray(nums) {
//     if (nums.length <= 1) return nums;

//     let pivot = nums[0];
//     let left = [];
//     let right = [];

//     for (let i = 1; i < nums.length; i++) {
//         const currNum = nums[i];

//         if (currNum < pivot) {
//             left.push(currNum);
//         } else {
//             right.push(currNum);
//         }
//     }

//     return sortArray(left).concat(pivot, sortArray(right));
// }

/**
 * Solution 2 -- Merge Sort
 * Time: O(n log n)
 * Space: O(n)
 *
 * @param {number[]} numsArr
 * @return {number[]}
 */
function sortArray(numsArr) {
    if (numsArr.length <= 1) return numsArr;

    const middleIndex = Math.floor(numsArr.length / 2);
    const leftArr = numsArr.slice(0, middleIndex);
    const rightArr = numsArr.slice(middleIndex);

    return merge(sortArray(leftArr), sortArray(rightArr));
}

function merge(leftArr, rightArr) {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftElem = leftArr[leftIndex];
        const rightElem = rightArr[rightIndex];

        if (leftElem < rightElem) {
            resultArr.push(leftElem);
            leftIndex++;
        } else {
            resultArr.push(rightElem);
            rightIndex++;
        }
    }

    return [
        ...resultArr,
        ...leftArr.slice(leftIndex),
        ...rightArr.slice(rightIndex),
    ];
}

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
