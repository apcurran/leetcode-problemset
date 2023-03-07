"use strict";

/**
 * solution 1
 * time: O(n^3)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @param {number} targetDiff
 * @return {number}
 */
function arithmeticTriplets(nums, targetDiff) {
    let arithmeticTripletsCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j];
            const firstDiff = secondNum - firstNum;

            for (let k = j + 1; k < nums.length; k++) {
                const thirdNum = nums[k];
                const secondDiff = thirdNum - secondNum;

                if (firstDiff === targetDiff && secondDiff === targetDiff) {
                    arithmeticTripletsCount++;
                }
            }
        }
    }

    return arithmeticTripletsCount;
}

console.log( arithmeticTriplets([0,1,4,6,7,10], 3) ); // 2
console.log( arithmeticTriplets([4,5,6,7,8,9], 2) ); // 2
