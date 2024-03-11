"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursive
 * time: O(m * n)
 * space: O(m + n)
 * 
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    // empty subroot is always a subtree of root (null node)
    if (subRoot === null) return true;

    if (root === null) return false;

    if (areSameTrees(root, subRoot)) return true;

    // otherwise, check child nodes of root tree
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

/**
 * 
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
function areSameTrees(tree1, tree2) {
    // empty trees are technically the same -> true
    if (tree1 === null && tree2 === null) return true;
    // one empty, one not empty -> false
    if (tree1 === null || tree2 === null) return false;
    // vals have to match
    if (tree1.val !== tree2.val) return false;

    // check child nodes
    const areLeftSubtreesSame = areSameTrees(tree1.left, tree2.left);
    const areRightSubtreesSame = areSameTrees(tree1.right, tree2.right);

    return areLeftSubtreesSame && areRightSubtreesSame;
}
