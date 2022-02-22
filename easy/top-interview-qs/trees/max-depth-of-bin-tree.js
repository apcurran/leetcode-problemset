"use strict";


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Solution 1 -- recursion DFS
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    const currMaxDepth = Math.max(leftDepth, rightDepth);

    return 1 + currMaxDepth;
}

/**
 * Solution 2 -- iterative DFS
 * time: O(n)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    let stack = [[root, 1]];
    let level = 1;

    while (stack.length > 0) {
        const [node, depth] = stack.pop();

        if (node !== null) {
            level = Math.max(level, depth);

            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }

    return level;
}