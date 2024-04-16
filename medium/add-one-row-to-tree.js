"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode|null}
 */
function addOneRow(root, val, depth) {
    if (root === null) return null;

    if (depth === 1) {
        root = new TreeNode(val, root, null);
    } else if (depth === 2) {
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    } else {
        addOneRow(root.left, val, depth - 1);
        addOneRow(root.right, val, depth - 1);
    }

    return root;
}
