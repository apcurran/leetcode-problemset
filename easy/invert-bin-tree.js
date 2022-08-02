"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// /**
//  * solution 1 -- DFS stack
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// function invertTree(root) {
//     if (root === null) return null;

//     let stack = [root];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();

//         // destructured swap
//         [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];

//         if (currentNode.left !== null) stack.push(currentNode.left);

//         if (currentNode.right !== null) stack.push(currentNode.right);
//     }

//     return root;
// }

// /**
//  * solution 2 -- Recursive DFS stack
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// function invertTree(root) {
//     // base case
//     if (root === null) return null;

//     // recursive cases
//     let left = invertTree(root.left);
//     let right = invertTree(root.right);
//     // swap
//     root.left = right;
//     root.right = left;

//     return root;
// }

/**
 * solution 3 -- BFS queue
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    // base case
    if (root === null) return null;

    let queue = [root];

    while (queue.length > 0) {
        const currNode = queue.shift();

        // destructure swap
        [currNode.left, currNode.right] = [currNode.right, currNode.left];

        if (currNode.left) queue.push(currNode.left);

        if (currNode.right) queue.push(currNode.right);
    }

    return root;
}