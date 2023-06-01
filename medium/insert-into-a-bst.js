"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
    let currentNode = root;

    while (currentNode !== null) {
        if (val > currentNode.val) {
            if (currentNode.right === null) {
                currentNode.right = new TreeNode(val);

                return root;
            }

            // travel right
            currentNode = currentNode.right;
        } else {
            if (currentNode.left === null) {
                currentNode.left = new TreeNode(val);

                return root;
            }

            // travel left
            currentNode = currentNode.left;
        }
    }

    // empty tree? create a new root
    return new TreeNode(val);
}
