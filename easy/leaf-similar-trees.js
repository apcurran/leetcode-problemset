"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// /**
//  * solution 1 -- iterative DFS
//  * n = total root1 nodes
//  * m = total root2 nodes
//  * time: O(n + m)
//  * space: O(n + m)
//  * 
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {boolean}
//  */
// function leafSimilar(root1, root2) {
//     if (root1 === null && root2 === null) return true;

//     if (root1 === null) return false;

//     if (root2 === null) return false;

//     const tree1LeafValues = getLeaves(root1);
//     const tree2LeafValues = getLeaves(root2);

//     return areArraysEqual(tree1LeafValues, tree2LeafValues);
// }

// /**
//  * @param {TreeNode} root
//  * @returns {number[]}
//  */
// function getLeaves(root) {
//     if (root === null) return [];

//     let stack = [root];
//     let leafNodeValues = [];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();

//         if (currentNode.left === null && currentNode.right === null) {
//             // leaf node here
//             leafNodeValues.push(currentNode.val);
//         }

//         if (currentNode.right) {
//             stack.push(currentNode.right);
//         }

//         if (currentNode.left !== null) {
//             stack.push(currentNode.left);
//         }
//     }

//     return leafNodeValues;
// }

// /**
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @returns {boolean}
//  */
// function areArraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         const arr1Value = arr1[i];
//         const arr2Value = arr2[i];

//         if (arr1Value !== arr2Value) return false;
//     }

//     return true;
// }

/**
 * solution 2 -- recursive DFS
 * n = total root1 nodes
 * m = total root2 nodes
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
    if (root1 === null && root2 === null) return true;

    if (root1 === null) return false;

    if (root2 === null) return false;

    let tree1LeafValues = [];
    let tree2LeafValues = [];
    getLeafValues(root1, tree1LeafValues);
    getLeafValues(root2, tree2LeafValues);

    return areArraysEqual(tree1LeafValues, tree2LeafValues);
}

/**
 * @param {TreeNode} root
 * @param {number[]} nodeLeafValues
 * @returns {void}
 */
function getLeafValues(root, nodeLeafValues) {
    if (root === null) return;

    if (root.left === null && root.right === null) {
        // leaf node
        nodeLeafValues.push(root.val);
    }

    getLeafValues(root.left, nodeLeafValues);
    getLeafValues(root.right, nodeLeafValues);
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {boolean}
 */
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    return arr1.every((arr1Value, i) => arr1Value === arr2[i]);
}
