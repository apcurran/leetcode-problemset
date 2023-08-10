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

        // if not first element and current value is a duplicate of previous value
        if (i > 0 && currNum === prevNum) continue;

        // two-sum (two pointers)
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = currNum + nums[left] + nums[right];

            if (currentSum > 0) {
                // decrease sum
                right--;
            } else if (currentSum < 0) {
                // increase sum
                left++;
            } else {
                // localSum is equal to 0
                result.push([currNum, nums[left], nums[right]]);
                // check for more matches with same current first value
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

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2], [-1,0,1]]
