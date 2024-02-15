"use strict";

/**
 * solution 1 -- sort
 * time: O(n * log n) -- sorting
 * space: O(n) -- sorting
 * 
 * @param {number[]} nums
 * @return {number}
 */
function largestPerimeter(nums) {
    nums.sort(function sortAsc(a, b) {
        return a - b;
    });

    let result = -1;
    let total = 0;

    for (let num of nums) {
        if (total > num) {
            result = total + num;
        }

        total += num;
    }

    return result;
}

console.log(largestPerimeter([5,5,5])); // 15
console.log(largestPerimeter([1,12,1,2,5,50,3])); // 12
