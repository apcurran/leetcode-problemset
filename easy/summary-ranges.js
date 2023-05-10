"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {string[]}
 */
function summaryRanges(nums) {
    let ranges = [];

    for (let i = 0; i < nums.length; i++) {
        const start = nums[i];

        // keep iterating
        // ensure that we haven't passed the end of the nums array (i + 1 < nums.length check)
        // ensure that our expected next num (nums[i] + 1) is equal to the actual next num (nums[i + 1])
        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++;
        }

        if (start !== nums[i]) {
            ranges.push(`${start}->${nums[i]}`);
        } else {
            ranges.push(String(start));
        }
    }

    return ranges;
}

console.log( summaryRanges([0,1,2,4,5,7]) ); // ["0->2","4->5","7"]
