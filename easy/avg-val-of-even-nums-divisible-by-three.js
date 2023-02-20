"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function averageValue(nums) {
    const evensDivisibleByThree = nums.filter((num) => {
        if (num % 2 === 0 && num % 3 === 0) {
            return num;
        }
    });
    const sumOfevensDivisibleByThree = evensDivisibleByThree.reduce((sum, currentValue) => sum + currentValue, 0);

    if (evensDivisibleByThree.length === 0) return 0;

    return Math.floor(sumOfevensDivisibleByThree / evensDivisibleByThree.length);
}

console.log( averageValue([1,3,6,10,12,15]) ); // 9
console.log( averageValue([1,2,4,7,10]) ); // 0
console.log( averageValue([94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]) ); // 61
