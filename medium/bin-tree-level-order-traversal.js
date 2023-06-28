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
//  * solution 1 -- iterative bfs (queue)
//  * n = num of nodes
//  * m = num of nodes in each level
//  * time: O(n * m^2) -- m^2 due to use of array.shift() which has O(m) time complexity
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// function levelOrder(root) {
//     if (root === null) return [];

//     let queue = [root];
//     let resArr = [];

//     while (queue.length > 0) {
//         // cache curr queue length
//         const queueLen = queue.length;
//         let currLevelArr = [];
//         // iterate through curr level
//         for (let i = 0; i < queueLen; i++) {
//             const currNode = queue.shift();
    
//             if (currNode.left) queue.push(currNode.left);
    
//             if (currNode.right) queue.push(currNode.right);
    
//             currLevelArr.push(currNode.val);
//         }

//         resArr.push(currLevelArr);
//     }

//     return resArr;
// }

/**
 * solution 2 -- BFS
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (root === null) return [];

    let queue = [root];
    let results = [];

    while (queue.length > 0) {
        const currentQueueLength = queue.length;
        let levelNodeValues = [];

        for (let i = 0; i < currentQueueLength; i++) {
            const node = queue.shift();
            levelNodeValues.push(node.val);

            if (node.left !== null) {
                queue.push(node?.left);
            }

            if (node.right !== null) {
                queue.push(node?.right);
            }
        }

        results.push(levelNodeValues);
    }

    return results;
}
