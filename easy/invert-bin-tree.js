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
 * solution1 -- DFS stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root === null) return null;

    let stack = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        // destructured swap
        [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];

        if (currentNode.left !== null) stack.push(currentNode.left);

        if (currentNode.right !== null) stack.push(currentNode.right);
    }

    return root;
}