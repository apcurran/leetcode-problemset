"use strict";

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function longestSquareStreak(nums) {
    const maxLimit = 10 ** 5; // constraint
    const uniqueNums = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        let currentStreak = 0;
        let current = num;

        while (uniqueNums.has(current)) {
            currentStreak++;

            if (current * current > maxLimit) break;

            const currentSquared = current * current;
            current = currentSquared;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
    }

    return longestStreak <= 1 ? -1 : longestStreak;
}

console.log(longestSquareStreak([4,3,6,16,8,2])); // 3 -> [4, 16, 2]
