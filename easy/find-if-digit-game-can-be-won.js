"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function canAliceWin(nums) {
    // sum all single-digit nums
    let sumSingleDigitNums = 0;
    let sumDoubleDigitNums = 0;

    for (let num of nums) {
        if (num >= -9 && num <= 9) {
            sumSingleDigitNums += num;
        } else {
            sumDoubleDigitNums += num;
        }
    }

    // compare sums
    if (sumDoubleDigitNums === sumSingleDigitNums) {
        return false;
    } else {
        return true;
    }
}

console.log(canAliceWin([1, 2, 3, 4, 10])); // false 10 sum === 10 sum
console.log(canAliceWin([1, 2, 3, 4, 5, 14])); // true
console.log(canAliceWin([5, 5, 5, 25])); // true
