"use strict";

/**
 * solution 1 -- correct, but TLE (simulation)
 * n = happinessScores
 * time: O(k * n)
 * space: O(1)
 * 
 * @param {number[]} happinessScores
 * @param {number} k
 * @return {number}
 */
function maximumHappinessSum(happinessScores, k) {
    // run simulation
    let happinessSum = 0;
    // while k > 0
    while (k > 0) {
        // find current happiness array max value
        // pick max value,
        const [currentHappinessMax, currentHappinessMaxIndex] = getMax(happinessScores);
        // zero out current value in happiness array,
        happinessScores[currentHappinessMaxIndex] = 0;
        // decrement k
        k--;
        // add max value to total sum
        happinessSum += currentHappinessMax;

        decrementScores(happinessScores);
    }

    return happinessSum;
}

console.log(maximumHappinessSum([1,2,3], 2)); // 4

/**
 * @param {number[]} nums 
 * @returns {[number, number]} [maxValue, maxIndex]
 */
function getMax(nums) {
    let max = nums[0];
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }

    return [max, maxIndex];
}

/**
 * @param {number[]} nums 
 * @returns {number[]} mutate original array
 */
function decrementScores(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            nums[i]--;
        }
    }

    return nums;
}
