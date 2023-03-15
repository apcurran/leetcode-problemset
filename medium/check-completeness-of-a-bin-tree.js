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
 * @return {boolean}
 */
function isCompleteTree(root) {
    let queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode !== null) {
            queue.push(currentNode?.left, currentNode?.right);
        } else {
            // check for non-null
            while (queue.length > 0) {
                if (queue.shift() !== null) {
                    return false;
                }
            }
        }
    }

    return true;
}
