"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    if (root === null) return [];

    let results = [];
    let queue = [root];

    // iterate BFS
    while (queue.length > 0) {
        const currentQueueLen = queue.length;
        let level = [];

        for (let i = 0; i < currentQueueLen; i++) {
            const currentNode = queue.shift();
            level.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        if (results.length % 2 !== 0) {
            // odd level reversal
            level = level.reverse();
        }

        results.push(level);
    }

    return results;
}
