"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function repeatedNTimes(nums) {
    // iterate nums arr and cache each elem
    let numsCache = new Map();
    
    for (let num of nums) {
        if (!numsCache.has(num)) {
            numsCache.set(num, 1);
            continue;
        }
        // return the num that repeats
        return num;
    }
}

console.log( repeatedNTimes([1, 2, 3, 3]) ); // 3
console.log( repeatedNTimes([2, 1, 2, 5, 3, 2]) ); // 2
