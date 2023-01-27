"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
    const uniqueNumbers = new Set(nums);

    if (uniqueNumbers.has(0)) {
        // remove 0 if it is in the Set, so subtract
        return uniqueNumbers.size - 1;
    }

    return uniqueNumbers.size;
}

console.log( minimumOperations([1,5,0,3,5]) ); // 3
