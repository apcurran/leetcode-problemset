"use strict";


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Solution 1 -- iterative DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
    if (root === null) return 0;

    let nodeStack = [root];
    let rangeSum = 0;

    while (nodeStack.length > 0) {
        const current = nodeStack.pop();
        const currVal = current.val;

        if (currVal >= low && currVal <= high) {
            rangeSum += currVal;
        }

        if (current.right) {
            nodeStack.push(current.right);
        }

        if (current.left) {
            nodeStack.push(current.left);
        }
    }

    return rangeSum;
}
