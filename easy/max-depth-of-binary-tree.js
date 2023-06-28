"use strict";

// /**
//  * solution 1 -- recursive DFS
//  * time: O(n)
//  * space: O(n) -- callstack
//  * 
//  * @param {TreeNode} root
//  * @return {number}
//  */
// function maxDepth(root) {
//     if (root === null) return 0;

//     const leftSubtreeCount = maxDepth(root.left);
//     const rightSubtreeCount = maxDepth(root.right);
//     const maxCountofChildSubtrees = Math.max(leftSubtreeCount, rightSubtreeCount);
//     const countOfSelfNode = 1;

//     return countOfSelfNode + maxCountofChildSubtrees;
// }

/**
 * solution 2 -- BFS
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    let levelsCount = 0;
    let queue = [root];

    while (queue.length > 0) {
        const queueCurrentLength = queue.length;

        for (let i = 0; i < queueCurrentLength; i++) {
            const currentNode = queue.shift();

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        levelsCount++;
    }

    return levelsCount;
}
