"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursive DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function flipEquiv(root1, root2) {
    // both trees are empty -> flip equivalent
    if (root1 === null && root2 === null) return true;

    // one or the other empty -> not flip equivalent
    if (root1 === null || root2 === null) {
        return false;
    }

    // diff values -> not flip equivalent
    if (root1.val !== root2.val) {
        return false;
    }

    const noSwap = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    const swap = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return noSwap || swap;
}
