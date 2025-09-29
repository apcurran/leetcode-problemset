"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- iterative DFS
 * time: O(n * log n) -- due to sorting of array
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
    let stack = [root];
    let nodeValues = [];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        nodeValues.push(currentNode.val);

        if (currentNode.right) {
            stack.push(currentNode.right);
        }

        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }

    nodeValues = nodeValues.toSorted((a, b) => a - b);

    let minimumDifference = Infinity;

    for (let i = 0; i < nodeValues.length - 1; i++) {
        const currentValue = nodeValues[i];
        const nextValue = nodeValues[i + 1];
        const currentDifference = Math.abs(currentValue - nextValue);
        minimumDifference = Math.min(minimumDifference, currentDifference);
    }

    return minimumDifference;
}
