"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursive
 * 
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    if (subRoot === null) return true;

    if (root === null) return false;

    // both trees are not empty
    if (areSameTrees(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

/**
 * 
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
function areSameTrees(tree1, tree2) {
    // empty trees are technically the same
    if (tree1 === null && tree2 === null) return true;
    // one empty, one not -> not equal
    if (tree1 === null || tree2 === null) return false;
    // vals have to match
    if (tree1.val !== tree2.val) return false;

    return areSameTrees(tree1.left, tree2.left) && areSameTrees(tree1.right, tree2.right);
}