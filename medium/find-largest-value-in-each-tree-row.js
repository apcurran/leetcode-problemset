"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- BFS
 * time: O(n^2)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function largestValues(root) {
    // check if null given initially
    if (root === null) return [];

    // queue for BFS
    let queue = [root];
    let largestResults = [];

    while (queue.length > 0) {
        // iterate current row of bin tree
        const queueRowLength = queue.length;
        // record max value of row
        let rowMax = -Infinity;

        for (let i = 0; i < queueRowLength; i++) {
            const currentNode = queue.shift();
            rowMax = Math.max(rowMax, currentNode.val);

            // check for left
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            // check for right
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        // done with tree row here
        largestResults.push(rowMax);
    }

    return largestResults;
}
