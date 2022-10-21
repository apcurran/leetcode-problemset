"use strict";

/**
 * solution 1 -- two-pointer technique
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let result = [];
    // sort ASC order
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        const prevNum = nums[i - 1];

        // prevent re-use of duplicate nums for triplets
        if (i > 0 && currNum === prevNum) continue;

        // two-sum (two pointers)
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const localSum = currNum + nums[left] + nums[right];

            if (localSum > 0) {
                // decrease sum by moving right pointer to the left
                right--;
            } else if (localSum < 0) {
                // increase sum by moving left pointer to the right
                left++;
            } else {
                // localSum is equal to 0
                // add to res arr
                result.push([currNum, nums[left], nums[right]]);
                // update pointers
                left++;
                // while local curr num is equal to local prev num
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return result;
}

console.log( threeSum([-1,0,1,2,-1,-4]) ); // [[-1,-1,2], [-1,0,1]]
