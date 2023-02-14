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
//  * @param {number} k
//  * @return {boolean}
//  */
// function findTarget(root, k) {
//     let seenValues = new Set();
//     let stack = [root];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();
//         const currentNodeVal = currentNode.val;
//         const neededValue = k - currentNodeVal;

//         if (seenValues.has(neededValue)) return true;
//         // otherwise, add value to set
//         seenValues.add(currentNodeVal);
//         // then keep exploring through the tree
//         if (currentNode.left) {
//             stack.push(currentNode.left);
//         }

//         if (currentNode.right) {
//             stack.push(currentNode.right);
//         }
//     }

//     // none found
//     return false;
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
function findTarget(root, k, seenValues = new Set()) {
    if (root === null) return false;

    const neededValue = k - root.val;

    if (seenValues.has(neededValue)) return true;

    // otherwise, add the value and continue through the tree 
    seenValues.add(root.val);

    return findTarget(root.left, k, seenValues) || findTarget(root.right, k, seenValues);
}

const a = new TreeNode(5);
const b = new TreeNode(3);
const c = new TreeNode(6);
const d = new TreeNode(2);
const e = new TreeNode(4);
const f = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log( findTarget(a, 9) ); // true
console.log( findTarget(new TreeNode(1), 2) ); // false

