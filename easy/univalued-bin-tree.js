"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// function isUnivalTree(root) {
//     // create a Set object to track unique node values
//     let uniqueValues = new Set();
//     // traverse binary tree
//     let stack = [root];

//     while (stack.length > 0) {
//         // pop off top node
//         const currentNode = stack.pop();
//         uniqueValues.add(currentNode.val);

//         // check if node's right property has a node
//         if (currentNode.right) {
//             // if so, add it to the stack
//             stack.push(currentNode.right);
//         }
//         // check if node's left property has a node
//         if (currentNode.left) {
//             // if so, add it to the stack
//             stack.push(currentNode.left);
//         }
//     }

//     return uniqueValues.size === 1;
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(h)
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTree(root, value = root.val) {
    if (root === null) return true;

    if (root.val !== value) return false;

    const isLeftSideUnival = isUnivalTree(root.left, value);
    const isRightSideUnival = isUnivalTree(root.right, value);

    return isLeftSideUnival && isRightSideUnival;
}
