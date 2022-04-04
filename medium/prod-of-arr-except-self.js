"use strict";

/**
 * time: O(n^2)
 * space: O(1) - if not counting output arr as extra space
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        let innerNumProd = 1;

        for (let j = 0; j < nums.length; j++) {
            // skip calc of curr i index
            if (j === i) continue;

            const innerNum = nums[j];
            innerNumProd *= innerNum;
        }

        // account for neg 0 case
        if (Object.is(-0, innerNumProd)) {
            resArr.push(0);
        } else {
            resArr.push(innerNumProd);
        }
    }

    return resArr;
}

console.log( productExceptSelf([1,2,3,4]) ); // [24,12,8,6]
console.log( productExceptSelf([-1,1,0,-3,3]) ); // [0,0,9,0,0]

