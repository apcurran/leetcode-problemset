"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- DFS recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function distributeCoins(root) {
    let result = 0;

    /**
     * 
     * @param {TreeNode} root 
     * @returns {[number, number]} [nodesCount, coinsCount]
     */
    function dfs(root) {
        if (root === null) {
            return [0, 0];
        }

        const [leftNodesCount, leftCoinsCount] = dfs(root.left);
        const [rightNodesCount, rightCoinsCount] = dfs(root.right);
        const currentNodesCount = 1 + leftNodesCount + rightNodesCount;
        const currentCoinsCount = root.val + leftCoinsCount + rightCoinsCount;

        result += Math.abs(currentNodesCount - currentCoinsCount);

        return [currentNodesCount, currentCoinsCount];
    }

    dfs(root);

    return result;
}
