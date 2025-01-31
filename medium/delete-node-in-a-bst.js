"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
    if (!root) {
        return root;
    }

    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }

        let current = root.right;

        while (current.left) {
            // traverse
            current = current.left;
        }

        // min node found
        root.val = current.val;
        root.right = deleteNode(root.right, root.val);
    }

    return root;
}
