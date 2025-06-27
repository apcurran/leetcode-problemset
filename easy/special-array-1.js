"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function isArraySpecial(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        const currentNum = nums[i];
        const currentNumParity = isNumEven(currentNum);
        const nextNum = nums[i + 1];
        const nextNumParity = isNumEven(nextNum);
        // if those two nums are different parity (even and odd),
        // keep going,
        // otherwise,
        // return false
        
        if (currentNumParity === nextNumParity) {
            return false;
        }
    }
    
    // after checking all pairs, return true
    return true;
}

/**
 * @param {number} num 
 * @returns {boolean}
 */
function isNumEven(num) {
    return num % 2 === 0;
}

console.log(isArraySpecial([2, 1, 4])); // true
console.log(isArraySpecial([4, 3, 1, 6])); // false
