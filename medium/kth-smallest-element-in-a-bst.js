"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const a = new TreeNode(3);
const b = new TreeNode(1);
const c = new TreeNode(4);
const d = new TreeNode(2);

a.left = b;
a.right = c;
b.right = d;

/**
 * solution 1 -- DFS (unoptimized)
 * time: O(n * log n) -- sort
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    let values = [];
    let stack = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        values.push(currentNode.val);

        if (currentNode?.right !== null) {
            stack.push(currentNode?.right);
        }

        if (currentNode?.left !== null) {
            stack.push(currentNode?.left);
        }
    }

    // ASC order
    values.sort((a, b) => a - b);

    return values[k - 1];
}

console.log(kthSmallest(a, 1)); // 1
