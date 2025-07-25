"use strict";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function buildArray(nums) {
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        const newResNum = nums[nums[i]];
        resArr.push(newResNum);
    }

    return resArr;
}

console.log(buildArray([0, 2, 1, 5, 3, 4])); // [0,1,2,4,5,3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // [4,5,0,1,2,3]
