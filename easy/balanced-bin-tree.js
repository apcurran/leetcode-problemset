"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// function isBalanced(root) {
//     if (root === null) return true;

//     const leftSubtree = getDepth(root.left);
//     const rightSubtree = getDepth(root.right);
//     const subtreesDiff = Math.abs(leftSubtree - rightSubtree);

//     const isLeftSubtreeBalanced = isBalanced(root.left);
//     const isRightSubtreeBalanced = isBalanced(root.right);

//     return subtreesDiff <= 1 && isLeftSubtreeBalanced && isRightSubtreeBalanced;
// }

// /**
//  * @param {TreeNode} root 
//  * @returns {number}
//  */
// function getDepth(root) {
//     if (root === null) return 0;

//     const leftSubtreeDepth = getDepth(root.left);
//     const rightSubtreeDepth = getDepth(root.right);

//     return 1 + Math.max(leftSubtreeDepth, rightSubtreeDepth);
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    return dfs(root)[0];
}

/**
 * 
 * @param {TreeNode} root 
 * @returns {array} [isBalanced, treeHeight]
 */
function dfs(root) {
    if (root === null) return [true, 0];

    const left = dfs(root.left);
    const right = dfs(root.right);
    const [isLeftBalanced, leftHeight] = left;
    const [isRightBalanced, rightHeight] = right;
    const isTreeBalanced = (isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1);
    const currRootHeight = 1;
    const largestHeight = Math.max(leftHeight, rightHeight);

    return [isTreeBalanced, currRootHeight + largestHeight];
}
