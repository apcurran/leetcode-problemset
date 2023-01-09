"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// /**
//  * solution 1 -- BFS
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// function rightSideView(root) {
//     if (root === null) return [];

//     let queue = [root];
//     let results = [];

//     while (queue.length > 0) {
//         let rightSideNode = null;
//         let queueLength = queue.length;
        
//         for (let i = 0; i < queueLength; i++) {
//             const currentNode = queue.shift();

//             if (currentNode !== null) {
//                 rightSideNode = currentNode;
//                 queue.push(currentNode.left);
//                 queue.push(currentNode.right);
//             }
//         }

//         if (rightSideNode !== null) {
//             results.push(rightSideNode.val);
//         }
//     }

//     return results;
// }

// /**
//  * solution 2 -- BFS slight alterations
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// function rightSideView(root) {
//     if (root === null) return [];

//     let queue = [root];
//     let results = [];

//     while (queue.length > 0) {
//         const queueLength = queue.length;

//         for (let i = 0; i < queueLength; i++) {
//             // front of queue
//             const currentNode = queue.shift();

//             if (i === 0) {
//                 results.push(currentNode.val);
//             }

//             // push right side first
//             if (currentNode.right) {
//                 queue.push(currentNode.right);
//             }

//             if (currentNode.left) {
//                 queue.push(currentNode.left);
//             }
//         }
//     }

//     return results;
// }

/**
 * solution 3 -- DFS recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    let results = [];

    dfs(root, 0, results);

    return results;
}

/**
 * 
 * @param {TreeNode} root 
 * @param {number} level 
 * @param {number[]} results 
 * @returns {void}
 */
function dfs(root, level, results) {
    if (root === null) return;

    if (level >= results.length) {
        results.push(root.val);
    } else {
        results[level] = root.val;
    }

    dfs(root.left, level + 1, results);
    dfs(root.right, level + 1, results);
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(5);
const e = new TreeNode(4);

a.left = b;
a.right = c;
b.right = d;
c.right = e;

console.log( rightSideView(a) ); // [1, 3, 4]
