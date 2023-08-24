"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
    let result = [root.val];

    /**
     * @param {TreeNode} root 
     * @returns {number}
     */
    function dfs(root) {
        if (root === null) return 0;

        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);
        const currentSum = root.val + leftMax + rightMax;

        // compute max path sum (inlude split)
        result[0] = Math.max(result[0], currentSum);

        // max path sum without split
        return root.val + Math.max(leftMax, rightMax);
    }

    dfs(root);

    return result[0];
}
