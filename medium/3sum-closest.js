"use strict";

/**
 * solution 1
 * time: O(n^3)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    let closestSumToTarget = Infinity;
    let previousMinDistance = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const localSum = nums[i] + nums[j] + nums[k];
                const distanceToTarget = Math.abs(target - localSum);

                if (distanceToTarget < previousMinDistance) {
                    previousMinDistance = distanceToTarget;
                    closestSumToTarget = localSum;
                }
            }
        }
    }

    return closestSumToTarget;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
