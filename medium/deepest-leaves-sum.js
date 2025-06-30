"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- nested recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
    let deepestLevel = 0;
    let sum = 0;

    function traverse(node, currLevel) {
        if (node === null) return;

        if (currLevel === deepestLevel) {
            sum += node.val;
        } else if (currLevel > deepestLevel) {
            // reset level
            deepestLevel = currLevel;
            // reset sum
            sum = node.val;
        }

        const nextLevel = currLevel + 1;
        // recursive calls
        traverse(node.left, nextLevel);
        traverse(node.right, nextLevel);
    }

    // start recursion
    traverse(root, 0);

    return sum;
}
