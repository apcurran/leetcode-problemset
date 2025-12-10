"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

//           3
//          / \
//         9   20
//            /  \
//           15   7

// /**
//  * solution 1 -- BFS
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {TreeNode} root
//  * @return {number}
//  */
// function minDepth(root) {
//     if (root === null) return 0;

//     let queue = [root];
//     let currentLevel = 1; // start with the count of the first root node

//     while (queue.length > 0) {
//         // search this tree level
//         let queueLen = queue.length;

//         for (let i = 0; i < queueLen; i++) {
//             const node = queue.shift();

//             if (node.left === null && node.right === null) {
//                 // leaf node -> end the func
//                 return currentLevel;
//             }

//             if (node.left !== null) {
//                 // add child
//                 queue.push(node?.left);
//             }

//             if (node.right !== null) {
//                 // add child
//                 queue.push(node?.right);
//             }
//         }

//         currentLevel++;
//     }

//     return 0; // this should not ever be reached
// }

/**
 * solution 2 -- recursive DFS
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (root === null) return 0;

    const currentNodeCount = 1;

    if (root.left === null) {
        return currentNodeCount + minDepth(root.right);
    }

    if (root.right === null) {
        return currentNodeCount + minDepth(root.left);
    }

    return currentNodeCount + Math.min(minDepth(root.left), minDepth(root.right));
}

console.log(minDepth(a)); // 2
