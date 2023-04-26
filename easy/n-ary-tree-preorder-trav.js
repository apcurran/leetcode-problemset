"use strict";

// Definition for a Node.
function TreeNode(val, children) {
    this.val = val;
    this.children = children;
}

// /**
//  * solution 1 -- iterative
//  * 
//  * @param {TreeNode|null} root
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
 * @param {TreeNode|null} root
 * @return {number[]}
 */
function preorder(root) {
    let results = [];

    return recurse(root, results);
}

/**
 * 
 * @param {TreeNode|null} root 
 * @param {number[]} results 
 */
function recurse(root, results) {
    if (root === null) return results;

    results.push(root.val);

    for (let child of root.children) {
        recurse(child, results);
    }

    return results;
}
