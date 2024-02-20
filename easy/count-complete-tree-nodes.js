"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/**
 * solution 1 -- Passes tests, but not log n time
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
    if (root === null) return 0;

    const currentNodeCount = 1;

    return currentNodeCount + countNodes(root.left) + countNodes(root.right);
}

console.log(countNodes(a)); // 6

