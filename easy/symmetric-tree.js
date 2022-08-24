"use strict";


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (root === null) return true;

    return dfs(root.left, root.right);
}

/**
 * @param {TreeNode} rootLeft 
 * @param {TreeNode} rootRight 
 * @returns {boolean}
 */
function dfs(rootLeft, rootRight) {
    if (rootLeft === null && rootRight === null) return true;

    if (rootLeft === null || rootRight === null) return false;

    if (rootLeft.val !== rootRight.val) return false;

    return dfs(rootLeft.left, rootRight.right) && dfs(rootLeft.right, rootRight.left);
}