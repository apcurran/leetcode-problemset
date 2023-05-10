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

        // keep iterating until the next element is one more than the current element
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
