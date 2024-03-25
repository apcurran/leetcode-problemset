"use strict";

function Node(val, children) {
    this.val = val;
    this.children = children;
}

/**
 * solution 1 -- BFS (level order traversal)
 * time: O(n^3)
 * space: O(n)
 * 
 * @param {Node|null} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (root === null) return [];

    let queue = [root];
    let results = [];

    while (queue.length > 0) {
        const queueSize = queue.length;
        let levelNodesValues = [];

        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift();
            // add value to current level values
            levelNodesValues.push(node.val);

            // check all children to add to queue
            for (let child of node.children) {
                if (child !== null) {
                    queue.push(child);
                }
            }
        }

        results.push(levelNodesValues);
    }

    return results;
}
