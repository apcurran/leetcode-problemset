"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    if (root === null) return;

    let head = null;

    /**
     * @param {TreeNode} currentNode 
     * @returns {void}
     */
    function reversePreorder(currentNode) {
        if (currentNode.right !== null) {
            reversePreorder(currentNode.right);
        }

        if (currentNode.left !== null) {
            reversePreorder(currentNode.left);
        }

        // adjust pointers //
        // clear out left pointer
        currentNode.left = null;
        // right pointer points to current head
        currentNode.right = head;
        // currentNode reference now stored in head var from outer scope
        head = currentNode;
    }

    reversePreorder(root);
}
