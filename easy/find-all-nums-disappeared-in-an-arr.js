"use strict";

/**
 * Solution 1
 * time: O(n log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    let resArr = [];
    const numsSet = new Set(nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) {
            resArr.push(i);
        }
    }

    return resArr;
}

console.log( findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]) ); // [5, 6]
console.log( findDisappearedNumbers([1, 1]) ); // [2]
