"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

a.left = b;
a.right = c;

console.log( sumNumbers(a) ); // 12 + 13 = 25


/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root, currentSum = 0) {
    if (root === null) return 0;

    const num = currentSum * 10 + root.val;

    if (root.left === null && root.right === null) return num;

    return sumNumbers(root.left, num) + sumNumbers(root.right, num);
}
