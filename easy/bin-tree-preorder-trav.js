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
 * solution 1 -- iterative preorder traversal
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    let stack = [root];
    let resArr = [];

    while (stack.length > 0) {
        const curr = stack.pop();

        // handle null left or right pointer added to stack
        if (curr === null) continue;

        // add to res
        resArr.push(curr.val);
        // traversal
        stack.push(curr.right, curr.left);
    }

    return resArr;
}