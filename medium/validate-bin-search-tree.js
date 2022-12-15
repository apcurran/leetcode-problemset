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
 * @param {TreeNode} node 
 * @param {number} left 
 * @param {number} right 
 * @returns {boolean}
 */
function validate(node, left, right) {
    // an empty node is still valid
    if (node === null) return true;

    if (!(left < node.val && node.val < right)) return false;

    const validateLeft = validate(node.left, left, node.val);
    const validateRight = validate(node.right, node.val, right);

    return validateLeft && validateRight;
}