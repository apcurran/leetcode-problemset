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
 * @return {boolean}
 */
function isEvenOddTree(root) {
    let isLevelEven = true;
    let queue = [root];

    while (queue.length > 0) {
        let previousNodeValue = isLevelEven ? -Infinity : Infinity;
        // cache this to save current size
        const queueSize = queue.length;

        for (let i = 0; i < queueSize; i++) {
            const currentNode = queue.shift();
            // setup for conditional logic
            const isValueEven = currentNode.val % 2 === 0;
            const isValueOdd = currentNode.val % 2 === 1;
            const isValueOrderNotIncreasing =
                currentNode.val <= previousNodeValue;
            const isValueOrderNotDecreasing =
                currentNode.val >= previousNodeValue;

            if (isLevelEven && (isValueEven || isValueOrderNotIncreasing)) {
                return false;
            }

            if (!isLevelEven && (isValueOdd || isValueOrderNotDecreasing)) {
                return false;
            }

            // add nodes to queue
            if (currentNode?.left !== null) {
                queue.push(currentNode?.left);
            }

            if (currentNode?.right !== null) {
                queue.push(currentNode?.right);
            }

            // update previous node
            previousNodeValue = currentNode?.val;
        }

        // flip flag
        isLevelEven = !isLevelEven;
    }

    return true;
}
