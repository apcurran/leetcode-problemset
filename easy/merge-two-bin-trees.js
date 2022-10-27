"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * n = num of nodes for root1
 * m = num of nodes for root2
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {TreeNode} root1 
 * @param {TreeNode} root2 
 * @returns {TreeNode|null}
 */
function mergeTrees(root1, root2) {
    if (root1 === null) return root2;

    if (root2 === null) return root1;

    const valsSum = root1.val + root2.val;
    const root = new TreeNode(valsSum);
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);

    return root;
}