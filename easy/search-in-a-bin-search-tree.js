"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * solution 1 -- iterative
 * time: O(log n)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, target) {
    while (root !== null) {
        // match target
        if (root.val === target) return root;
        // keep traversing
        const nextNode = root.val > target ? root.left : root.right;
        root = nextNode;
    }

    return root;
}
