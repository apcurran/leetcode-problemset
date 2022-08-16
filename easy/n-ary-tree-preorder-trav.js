"use strict";

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// /**
//  * solution 1 -- iterative
//  * 
//  * @param {Node|null} root
//  * @return {number[]}
//  */
// function preorder(root) {
//     if (root === null) return [];

//     let stack = [root];
//     let resArr = [];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();
//         resArr.push(currentNode.val);
        
//         // add child nodes to stack
//         while (currentNode.children.length) {
//             const descendantChildNode = currentNode.children.pop();
//             stack.push(descendantChildNode);
//         }
//     }

//     return resArr;
// }

/**
 * solution 2 -- recursive
 * 
 * @param {Node|null} root
 * @return {number[]}
 */
function preorder(root) {
    if (root === null) return [];

    let resArr = [];

    return recurse(root, resArr);
}

/**
 * 
 * @param {Node|null} root 
 * @param {number[]} arr 
 */
function recurse(root, arr) {
    if (root === null) return arr;

    arr.push(root.val);

    for (let child of root.children) {
        recurse(child, arr);
    }

    return arr;
}