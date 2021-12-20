"use strict";

/**
 * Given the array nums,
 * for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * 
 * Time: O(n^2)
 * Space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        const smallerNumsCount = findSmallerNumsCount(nums, nums[i]);
        resArr.push(smallerNumsCount);
    }

    return resArr;
}

/**
 * 
 * @param {number[]} numsArr 
 * @param {number} currNum 
 * @returns {number}
 */
function findSmallerNumsCount(numsArr, currNum) {
    let smallerNumsCount = 0;

    for (let j = 0; j < numsArr.length; j++) {
        if (numsArr[j] < currNum) {
            smallerNumsCount++;
        }
    }
    
    return smallerNumsCount;
}

console.log( smallerNumbersThanCurrent([8, 1, 2, 2, 3]) ); // [4, 0, 1, 1, 3]
