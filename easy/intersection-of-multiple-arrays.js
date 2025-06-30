"use strict";

/**
 * solution 1
 * n = nums length
 * m = num array length
 * time: O(m * n * m)
 * space: O(m)
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
function intersection(nums) {
    const firstArr = nums[0];
    let results = [];

    firstArrLoop: for (let elem of firstArr) {
        for (let i = 1; i < nums.length; i++) {
            const currentArray = nums[i];

            if (!currentArray.includes(elem)) continue firstArrLoop;
        }

        // elem is within all arrays
        results.push(elem);
    }

    // sort ASC
    return results.sort((a, b) => a - b);
}

console.log(
    intersection([
        [3, 1, 2, 4, 5],
        [1, 2, 3, 4],
        [3, 4, 5, 6],
    ]),
); // [3,4]
