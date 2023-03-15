"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- BFS
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (root === null) return 0;

    let queue = [root];
    let currentLevel = 1; // start with the count of the first root node

    while (queue.length > 0) {
        let queueLen = queue.length;

        for (let i = 0; i < queueLen; i++) {
            const node = queue.shift();

            if (node.left === null && node.right === null) {
                return currentLevel;
            }
            
            if (node.left !== null) {
                // add child
                queue.push(node?.left);
            }

            if (node.right !== null) {
                // add child
                queue.push(node?.right);
            }
        }

        currentLevel++;
    }

    return 0; // this should not ever be reached
}