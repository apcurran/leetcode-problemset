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
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function checkTree(root) {
    if (root.left.val + root.right.val === root.val) return true;

    return false;
}