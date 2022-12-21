"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    /**
     * 
     * @param {TreeNode} root 
     * @returns {number}
     */
    function maxDepth(root) {
        if (root === null) return 0;

        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        const currentDiameter = left + right;
        maxDiameter = Math.max(maxDiameter, currentDiameter);
        // return maximum + 1 (to count the root itself)
        return Math.max(left, right) + 1;
    }

    maxDepth(root);

    return maxDiameter;
}