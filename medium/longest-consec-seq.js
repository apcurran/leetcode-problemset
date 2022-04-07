"use strict";

/**
 * solution 1 -- cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    let numsSet = new Set(nums);
    let globalLongestConsec = 0;

    for (let num of nums) {
        // check if it is the start of a seq
        if (!numsSet.has(num - 1)) {
            let localLen = 1;

            while (numsSet.has(num + localLen)) {
                localLen++;
            }

            globalLongestConsec = Math.max(globalLongestConsec, localLen);
        }
    }

    return globalLongestConsec;
}

console.log( longestConsecutive([100, 4, 200, 1, 3, 2]) ); // 4
