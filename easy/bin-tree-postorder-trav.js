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
//  * solution 1 -- recursive
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// function postorderTraversal(root) {
//     let resArr = [];

//     recursiveHelper(root, resArr);

//     return resArr;
// }

// /**
//  * @param {TreeNode} node 
//  * @param {number[]} arr 
//  * @returns {void}
//  */
// function recursiveHelper(node, arr) {
//     if (node === null) return;

//     if (node.left) recursiveHelper(node.left, arr);

//     if (node.right) recursiveHelper(node.right, arr);

//     arr.push(node.val);
// }

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    if (root === null) return [];

    let stack = [root];
    let resArr = [];

    while (stack.length > 0) {
        const node = stack.pop();

        resArr.push(node.val);

        if (node.left) stack.push(node.left);

        if (node.right) stack.push(node.right);
    }

    return resArr.reverse();
}