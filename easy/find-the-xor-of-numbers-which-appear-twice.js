"use strict";

/**
 * solution 1 -- brute force (nested loops)
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function duplicateNumbersXOR(nums) {
    let result = 0;
    // find nums that appear twice
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j];

            if (firstNum === secondNum) {
                // duplicate num
                // for duplicate nums, XOR number with previous duplicate
                result ^= secondNum;

                break;
            }
        }
    }
    return result;
}

console.log(duplicateNumbersXOR([1,2,1,3])); // 1
console.log(duplicateNumbersXOR([1,2,2,1])); // 3 (1 ^ 2 === 3)
