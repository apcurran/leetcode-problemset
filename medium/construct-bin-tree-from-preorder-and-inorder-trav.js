"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * 
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode|null}
 */
function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const startingNode = preorder[0];
    const midPoint = inorder.indexOf(startingNode);
    let root = new TreeNode(startingNode);

    // build left subtree
    root.left = buildTree(preorder.slice(1, midPoint + 1), inorder.slice(0, midPoint));
    // build right subtree
    root.right = buildTree(preorder.slice(midPoint + 1), inorder.slice(midPoint + 1));

    return root;
}