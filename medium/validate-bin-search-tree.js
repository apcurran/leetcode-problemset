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
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    return validate(root, -Infinity, Infinity);
}

/**
 * @param {TreeNode} root 
 * @param {number} left 
 * @param {number} right 
 * @returns {boolean}
 */
function validate(root, left, right) {
    // an empty node is still valid
    if (root === null) return true;

    const isValidSubtree = left < root.val && root.val < right;

    if (!isValidSubtree) return false;

    const isValidLeft = validate(root.left, left, root.val);
    const isValidRight = validate(root.right, root.val, right);

    return isValidLeft && isValidRight;
}