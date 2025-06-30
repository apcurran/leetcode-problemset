"use strict";

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- recursion (postorder DFS)
 * time: O(n)
 * space: O(n) -- callstack
 *
 * delete all leaf nodes with target value
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode|null}
 */
function removeLeafNodes(root, target) {
    if (root === null) return null;

    // postorder -- check children first
    // set node children left or right to the result (either the node itself or null when deleting a node)
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    // now check current node
    if (root.left === null && root.right === null && root.val === target) {
        // leaf node identified
        // leaf node has a value equivalent to target
        // remove leaf node
        return null;
    } else {
        return root;
    }
}
