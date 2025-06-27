"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * solution 1 -- recursive dfs
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function averageOfSubtree(root) {
    let resCount = 0;

    function dfs(node) {
        if (node === null) return [0, 0];

        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);
        // add left child val, right child val, and self
        const sum = leftSum + rightSum + node.val;
        // add left child count, right child count, and self
        const count = leftCount + rightCount + 1;
        // value of the node is equal to the average of the values in its subtree
        if (Math.floor(sum / count) === node.val) {
            resCount++;
        }

        return [sum, count];
    }

    dfs(root);

    return resCount;
}
