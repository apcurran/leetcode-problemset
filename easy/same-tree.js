"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * n = num of nodes in tree
 * time: O(n)
 * space: O(n) -- worst case of a completely unbalanced tree
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // empty trees are technically the same
    if (p === null && q === null) return true;
    // if either tree node is null while the other is not
    if (p === null || q === null) return false;
    // values must match
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
