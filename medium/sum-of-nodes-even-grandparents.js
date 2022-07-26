"use strict";


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function sumEvenGrandparent(root, parent = 1, grandParent = 1) {
    if (root === null) return 0;

    const leftSum = sumEvenGrandparent(root.left, root.val, parent);
    const rightSum = sumEvenGrandparent(root.right, root.val, parent);
    const evenGpVal = grandParent % 2 === 0 ? root.val : 0;

    return leftSum + rightSum + evenGpVal;
}

