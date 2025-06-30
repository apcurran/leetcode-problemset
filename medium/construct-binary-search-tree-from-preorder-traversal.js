"use strict";

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- DFS recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
    if (preorder.length === 0) return null;

    let root = new TreeNode(preorder[0]);

    for (let i = 1; i < preorder.length; i++) {
        root = insert(root, preorder[i]);
    }

    return root;
}

/**
 *
 * @param {TreeNode} root
 * @param {number} currentValue
 * @returns {TreeNode} altered node
 */
function insert(root, currentValue) {
    if (root === null) {
        return new TreeNode(currentValue);
    }

    // compare current val and root val
    if (currentValue < root.val) {
        root.left = insert(root.left, currentValue);
    } else {
        root.right = insert(root.right, currentValue);
    }

    // root with value inserted
    return root;
}
