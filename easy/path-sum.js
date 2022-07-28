"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} targetSum
 * @param {number} currentSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum, currentSum = 0) {
    if (root === null) return false;

    // add total sum
    currentSum += root.val;

    // leaf node
    if (root.left === null && root.right === null) {
        return currentSum === targetSum;
    }

    const leftSide = hasPathSum(root.left, targetSum, currentSum);
    const rightSide = hasPathSum(root.right, targetSum, currentSum);

    return leftSide || rightSide;
}