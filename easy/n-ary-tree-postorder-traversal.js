"use strict";

// Definition for a Node.
function TreeNode(val, children) {
    this.val = val;
    this.children = children;
}

// /**
//  * solution 1 -- iterative DFS
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {TreeNode|null} root
//  * @return {number[]}
//  */
// function postorder(root) {
//     let stack = [root];
//     let results = [];

//     while (stack.length > 0) {
//         const currentNode = stack.pop();

//         if (currentNode === null) continue;

//         results.push(currentNode.val);
//         stack.push(...currentNode.children);
//     }

//     return results.reverse();
// }

/**
 * solution 2 -- recursive DFS
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode|null} root
 * @return {number[]}
 */
function postorder(root) {
    let results = [];

    return recurse(root, results);
}

/**
 * @param {TreeNode|null} root
 * @returns {number[]}
 */
function recurse(root, results) {
    if (root === null) return results;

    for (let child of root.children) {
        recurse(child, results);
    }

    results.push(root.val);

    return results;
}
