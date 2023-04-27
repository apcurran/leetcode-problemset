"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursive DFS
 * time: O(n^2) -- due to string concatenation within recursion
 * space: O(n^2)
 * 
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
    let rootToLeafPaths = [];
    getPaths(root, "", rootToLeafPaths);

    return rootToLeafPaths;
}

/**
 * @param {TreeNode} root 
 * @param {string} path
 * @param {string[]} rootToLeafPaths 
 * @returns {void}
 */
function getPaths(root, path, rootToLeafPaths) {
    if (root === null) return;

    if (root.left === null && root.right === null) {
        // leaf node here
        const updatedStrPath = path + root.val;
        rootToLeafPaths.push(updatedStrPath);

        return;
    }

    const updatedStrPath = path + root.val + "->";
    getPaths(root.left, updatedStrPath, rootToLeafPaths);
    getPaths(root.right, updatedStrPath, rootToLeafPaths);
}
