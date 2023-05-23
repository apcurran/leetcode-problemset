"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    const elems = buildArrayFromBST(root, []);
    const zeroIndexedK = k - 1;

    return elems[zeroIndexedK];
}

/**
 * @param {TreeNode} root
 * @param {number[]} arr 
 * @returns {number[]}
 */
function buildArrayFromBST(root, arr) {
    if (root === null) return arr;

    // check left side
    const leftSide = buildArrayFromBST(root.left, arr);
    // check right side
    const rightSide = buildArrayFromBST(root.right, arr);

    return [...leftSide, root.val, ...rightSide];
}
