"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// /**
//  * solution 1 -- DFS
//  * time: O(n)
//  * space: O(n) - stack data struct
//  *
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// function isUnivalTree(root) {
//     // traverse binary tree
//     let stack = [root];

//     while (stack.length > 0) {
//         // get the top node
//         const currentNode = stack.pop();

//         // different value -> not uni-valued
//         if (currentNode.val !== root.val) {
//             return false;
//         }

//         // check if node's right property has a node
//         if (currentNode.right !== null) {
//             // if so, add it to the stack
//             stack.push(currentNode.right);
//         }
//         // check if node's left property has a node
//         if (currentNode.left !== null) {
//             // if so, add it to the stack
//             stack.push(currentNode.left);
//         }
//     }

//     return true;
// }

// /**
//  * solution 2 -- BFS
//  * time: O(n^2) - queue data struct
//  * space: O(n) - queue space
//  *
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// function isUnivalTree(root) {
//     // traverse binary tree
//     let queue = [root];

//     while (queue.length > 0) {
//         // get the top node
//         const currentNode = queue.shift();

//         // different value -> not uni-valued
//         if (currentNode.val !== root.val) {
//             return false;
//         }

//         // check if node's left property has a node
//         if (currentNode.left !== null) {
//             // if so, add it to the queue
//             queue.push(currentNode.left);
//         }

//         // check if node's right property has a node
//         if (currentNode.right !== null) {
//             // if so, add it to the queue
//             queue.push(currentNode.right);
//         }
//     }

//     return true;
// }

/**
 * solution 3 -- recursive DFS
 * time: O(n)
 * space: O(h)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTree(root, value = root.val) {
    if (root === null) return true;

    if (root.val !== value) return false;

    return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
}
