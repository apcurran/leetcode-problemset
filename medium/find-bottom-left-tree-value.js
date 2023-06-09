"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- BFS
 * time: O(n^2) -- array.shift() within loop
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
    let queue = [root];
    let leftmostNode = root;

    while (queue.length > 0) {
        var currentNode = queue.shift();
        leftmostNode = currentNode;

        // travel right to left
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
    }

    return leftmostNode.val;
}
