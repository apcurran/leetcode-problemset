"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
    let currentSum = 0;

    /**
     * @param {TreeNode} node
     * @returns {void}
     */
    function dfs(node) {
        if (node === null) return;

        dfs(node.right);
        const tempValue = node.val;
        node.val += currentSum;
        currentSum += tempValue;
        dfs(node.left);
    }

    dfs(root);

    return root;
}
