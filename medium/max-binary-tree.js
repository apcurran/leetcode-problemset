"use strict";

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
function constructMaximumBinaryTree(nums) {
    return construct(nums, 0, nums.length);
}

/**
 *
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @returns {TreeNode|null}
 */
function construct(nums, left, right) {
    if (left === right) return null;

    const maxIndex = getMaxIndex(nums, left, right);
    let root = new TreeNode(nums[maxIndex]);
    root.left = construct(nums, left, maxIndex);
    root.right = construct(nums, maxIndex + 1, right);

    return root;
}

/**
 *
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function getMaxIndex(nums, left, right) {
    let maxIndex = left;

    for (let i = left; i < right; i++) {
        if (nums[maxIndex] < nums[i]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}
