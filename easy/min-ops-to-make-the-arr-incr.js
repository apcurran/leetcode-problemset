"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
    let minOperationsForStrictlyIncreasing = 0;

    if (nums.length === 1) return minOperationsForStrictlyIncreasing;

    for (let i = 1; i < nums.length; i++) {
        const currentNum = nums[i];
        const previousNum = nums[i - 1];

        if (currentNum === previousNum) {
            // add 1 to current for strict increasing
            nums[i] = currentNum + 1;
            // incr counter
            minOperationsForStrictlyIncreasing += 1;
        } else if (currentNum < previousNum) {
            // find diff
            const difference = previousNum - currentNum;
            // add to current for strict increasing
            nums[i] = currentNum + difference + 1;
            // incr counter
            minOperationsForStrictlyIncreasing += difference + 1;
        }
    }

    return minOperationsForStrictlyIncreasing;
}

console.log(minOperations([1, 5, 2, 4, 1])); // 14
