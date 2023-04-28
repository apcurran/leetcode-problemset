"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursive inorder DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function increasingBST(root) {
    let values = [];
    inorderTraversal(root, values);

    let dummyNode = new TreeNode();
    let currentNode = dummyNode;

    for (let value of values) {
        currentNode.right = new TreeNode(value);
        currentNode = currentNode.right;
    }

    // skip first dummy node,
    // look to the first node on the right
    return dummyNode.right;
}

/**
 * @param {TreeNode} node 
 * @param {number[]} values 
 */
function inorderTraversal(node, values) {
    if (node === null) return;

    inorderTraversal(node.left, values);
    values.push(node.val);
    inorderTraversal(node.right, values);
}
