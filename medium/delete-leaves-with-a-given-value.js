"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n) -- callstack
 * 
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode|null}
 */
function removeLeafNodes(root, target) {
    if (root === null) return null;

    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    if (root.left === null && root.right === null && root.val === target) {
        // leaf node identified
        // leaf node has a value equivalent to target
        // remove leaf node
        return null;
    }

    return root;
}
