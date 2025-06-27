"use strict";

/**
 * solution 1 -- nested loops
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maximumStrongPairXor(nums) {
    let maxXORValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const firstValue = nums[i];

        for (let j = i; j < nums.length; j++) {
            const secondValue = nums[j];
            const absDiff = Math.abs(firstValue - secondValue);

            if (absDiff <= Math.min(firstValue, secondValue)) {
                // generate XOR value
                const strongPairXORValue = firstValue ^ secondValue;
                maxXORValue = Math.max(maxXORValue, strongPairXORValue);
            }
        }
    }

    return maxXORValue;
}

console.log(maximumStrongPairXor([1, 2, 3, 4, 5])); // 7
console.log(maximumStrongPairXor([10, 100])); // 0
console.log(maximumStrongPairXor([5, 6, 25, 30])); // 7
