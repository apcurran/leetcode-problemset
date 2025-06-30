"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- BFS
 * time: O(n^2)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function reverseOddLevels(root) {
    let queue = [root];
    let levelCount = 0;

    while (queue.length > 0) {
        const queueSize = queue.length;

        // odd level
        if (levelCount % 2 !== 0) {
            // reverse nodes
            let leftPointer = 0;
            let rightPointer = queueSize - 1;

            while (leftPointer < rightPointer) {
                const tempLeftValue = queue[leftPointer].val;
                queue[leftPointer].val = queue[rightPointer].val;
                queue[rightPointer].val = tempLeftValue;

                // move pointers
                leftPointer++;
                rightPointer--;
            }
        }

        // add nodes to queue
        for (let i = 0; i < queueSize; i++) {
            const currentNode = queue.shift();

            if (currentNode?.left) {
                queue.push(currentNode.left);
            }

            if (currentNode?.right) {
                queue.push(currentNode.right);
            }
        }

        levelCount++;
    }

    return root;
}
