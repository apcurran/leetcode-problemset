"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 (DFS -- recursion)
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    if (root === null) return 0;

    let globalMaxDiameter = 0;
    dfs(root);

    return globalMaxDiameter;

    /**
     * @param {TreeNode} node 
     * @returns {number}
     */
    function dfs(node) {
        if (node === null) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);
        // get current diameter and compare with global max
        const currentDiameter = left + right;
        globalMaxDiameter = Math.max(globalMaxDiameter, currentDiameter);

        return 1 + Math.max(left, right);
    }
}
