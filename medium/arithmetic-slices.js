"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function numberOfArithmeticSlices(nums) {
    // must be at least 3 elems long
    if (nums.length < 3) return 0;

    let segmentCounter = 0;
    let arithmeticSlicesCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const difference1 = nums[i + 1] - nums[i];
        const difference2 = nums[i + 2] - nums[i + 1];

        if (difference1 !== difference2) {
            segmentCounter = 0;
            continue;
        }

        segmentCounter++;
        arithmeticSlicesCount += segmentCounter;
    }

    return arithmeticSlicesCount;
}

console.log( numberOfArithmeticSlices([1,2,3,4]) ); // 3
console.log( numberOfArithmeticSlices([1]) ); // 0
console.log( numberOfArithmeticSlices([1,2,3]) ); // 1
