"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- modified DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function rob(root) {
    /**
     * @param {TreeNode} root 
     * @returns {[number, number]}
     */
    function dfs(root) {
        if (!root) return [0, 0];

        const leftPair = dfs(root.left);
        const rightPair = dfs(root.right);

        const withRoot = root.val + leftPair[1] + rightPair[1];
        const withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

        return [withRoot, withoutRoot];
    }

    return Math.max(...dfs(root));
}
