"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- modified DFS
 * time: O(n^2)
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

        let leftPair = dfs(root.left);
        let rightPair = dfs(root.right);

        let withRoot = root.val + leftPair[1] + rightPair[1];
        let withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

        return [withRoot, withoutRoot];
    }

    return Math.max(...dfs(root));
}
