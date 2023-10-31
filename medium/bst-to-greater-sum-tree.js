"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- recursive callstack
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function bstToGst(root) {
    let valueSum = 0;

    /**
     * @param {TreeNode} node 
     * @returns {TreeNode}
     */
    function dfs(node) {
        if (node === null) return node;
        // right node
        dfs(node.right);
        // current
        valueSum += node.val;
        node.val = valueSum;
        // left node
        dfs(node.left);

        return node;
    }

    return dfs(root);
}
