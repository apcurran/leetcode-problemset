"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
function addOneRow(root, val, depth, currentLocation = 1) {
    if (depth === 1) {
        // add root
        const newRoot = new TreeNode(val, root);

        return newRoot;
    }

    if (depth - 1 === currentLocation) {
        root.left = new TreeNode(val, root.left);
        root.right = new TreeNode(val, null, root.right);
    } else {
        if (root.left) {
            addOneRow(root.left, val, depth, currentLocation + 1);
        }

        if (root.right) {
            addOneRow(root.right, val, depth, currentLocation + 1);
        }
    }

    return root;
}
