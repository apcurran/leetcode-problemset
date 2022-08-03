"use strict";


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    let resArr = [];

    recurseInorder(root, resArr);

    return resArr;
}

/**
 * helper func
 * 
 * @param {TreeNode} node 
 * @param {number[]} valsArr 
 * @returns {void}
 */
function recurseInorder(node, valsArr) {
    if (node === null) return;

    // traverse left
    recurseInorder(node.left, valsArr);
    // add val to arr
    valsArr.push(node.val);
    // traverse right
    recurseInorder(node.right, valsArr);
}
