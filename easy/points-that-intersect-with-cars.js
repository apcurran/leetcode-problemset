"use strict";

/**
 * solution 1 -- hashset
 * n = nums length
 * m = numbers from start to end of nums[i] tuple
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {number[][]} nums
 * @return {number}
 */
function numberOfPoints(nums) {
    let points = new Set();

    for (let [startCoord, endCoord] of nums) {
        for (let i = startCoord; i <= endCoord; i++) {
            points.add(i);
        }
    }

    return points.size;
}

console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]])); // 7
console.log(numberOfPoints([[1, 3], [5, 8]])); // 7
