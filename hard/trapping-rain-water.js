"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} heights
 * @return {number}
 */
function trap(heights) {
    if (!heights) return 0;

    let left = 0;
    let right = heights.length - 1;
    let leftMax = heights[left];
    let rightMax = heights[right];
    let result = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            const currentLeft = heights[left];
            leftMax = Math.max(leftMax, currentLeft);
            // cannot be negative
            result += leftMax - currentLeft;
        } else {
            right--;
            const currentRight = heights[right];
            rightMax = Math.max(rightMax, currentRight);
            result += rightMax - currentRight;
        }
    }

    return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
