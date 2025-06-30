"use strict";

/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn],
 * return the array in the form [x1,y1,x2,y2,...,xn,yn].
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
function shuffle(nums, n) {
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === n) break;

        const currX = nums[i];
        const currY = nums[i + n];
        resArr.push(currX, currY);
    }

    return resArr;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
