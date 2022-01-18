"use strict";

/**
 * Solution 1
 * Time: O(n^2)
 * Space: O(n^2)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    if (nums.length <= 1) return nums;

    const arrCopy = [...nums];
    const pivot = arrCopy[arrCopy.length - 1]; // Choose last elem
    let left = [];
    let right = [];

    for (let i = 0; i < arrCopy.length - 1; i++) {
        const currNum = arrCopy[i];

        if (currNum < pivot) {
            left.push(currNum);
        } else {
            right.push(currNum);
        }
    }

    return [...sortArray(left), pivot, ...sortArray(right)];
}

console.log( sortArray([5,2,3,1]) ); // [1,2,3,5]
