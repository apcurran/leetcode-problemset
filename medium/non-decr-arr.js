"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function checkPossibility(nums) {
    // flag
    let changed = false;

    for (let i = 0; i < nums.length - 1; i++) {
        const prevNum = nums[i - 1];
        const currNum = nums[i];
        const nextNum = nums[i + 1];

        if (currNum <= nextNum) continue;

        if (changed) return false;

        // we want to decrease the left elem
        if (i === 0 || nextNum >= prevNum) {
            nums[i] = nextNum;
        } else {
            nums[i + 1] = currNum;
        }

        changed = true;
    }

    return true;
}

console.log( checkPossibility([4,2,3]) ); // true (could modify the 4)
console.log( checkPossibility([4,2,1]) ); // false
