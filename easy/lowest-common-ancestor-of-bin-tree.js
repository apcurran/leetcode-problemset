"use strict";


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * solution 1 -- iterative
 * time: O(h)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    let curr = root;

    while (curr !== null) {
        if (p.val > curr.val && q.val > curr.val) {
            // look to the right
            curr = curr.right;
        } else if (p.val < curr.val && q.val < curr.val) {
            // look to the left
            curr = curr.left;
        } else {
            return curr;
        }
    }
}