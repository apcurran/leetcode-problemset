"use strict";

// Definition for a Node.
function TreeNode(val,children) {
   this.val = val;
   this.children = children;
}

/**
 * solution 1 -- BFS
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {TreeNode|null} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    // BFS
    let queue = [root];
    let maxCounter = 0;

    while (queue.length > 0) {
        // get current node from queue
        const cachedQueueLength = queue.length;
        
        for (let i = 0; i < cachedQueueLength; i++) {
            const currentNode = queue.shift();

            for (let childNode of currentNode.children) {
                queue.push(childNode);
            }
        }

        maxCounter++;
    }

    return maxCounter;
}