"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const a = new TreeNode(3);
const b = new TreeNode(1);
const c = new TreeNode(4);
const d = new TreeNode(2);

a.left = b;
a.right = c;
b.right = d;

// /**
//  * solution 1 -- DFS (unoptimized)
//  * time: O(n * log n) -- sort
//  * space: O(n)
//  *
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// function kthSmallest(root, k) {
//     let values = [];
//     let stack = [root];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();
//         values.push(currentNode.val);

//         if (currentNode?.right !== null) {
//             stack.push(currentNode?.right);
//         }

//         if (currentNode?.left !== null) {
//             stack.push(currentNode?.left);
//         }
//     }

//     // ASC order
//     values.sort((a, b) => a - b);

//     return values[k - 1];
// }

// /**
//  * solution 2 -- DFS
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */
// function kthSmallest(root, k) {
//     let stack = [];
//     let n = root;
//     let count = 0;

//     while (stack.length > 0 || n !== null) {
//         if (n !== null) {
//             stack.push(n);
//             n = n.left;
//         } else {
//             const node = stack.pop();
//             // update count
//             count++;

//             if (count === k) {
//                 return node.val;
//             }

//             n = node?.right;
//         }
//     }

//     // should not be reached
//     return -1;
// }

/**
 * solution 2 -- DFS recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    const nodeValues = recurse(root, []);

    return nodeValues[k - 1];
}

/**
 * @param {TreeNode} root
 * @param {number[]} values
 */
function recurse(root, values) {
    if (root === null) return values;

    recurse(root.left, values);
    values.push(root.val);
    recurse(root.right, values);

    return values;
}

console.log(kthSmallest(a, 1)); // 1
