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
 * solution 1 -- recursive dfs
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function evaluateTree(root) {
    // base case
    if (!root) return false;

    if (root.val === 1) {
        return true;
    } else if (root.val === 0) {
        return false;
    } else if (root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right);
    } else if (root.val === 3) {
        return evaluateTree(root.left) && evaluateTree(root.right);
    } else {
        return false;
    }
}
