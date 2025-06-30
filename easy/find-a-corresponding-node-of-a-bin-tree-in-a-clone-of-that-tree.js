"use strict";

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * solution 1 -- DFS
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
function getTargetCopy(original, cloned, target) {
    const neededTargetValue = target.val;
    let stack = [cloned];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        // handle current node value
        if (currentNode.val === neededTargetValue) {
            return currentNode;
        }

        // check for right
        if (currentNode.right) {
            // if exists, add
            stack.push(currentNode.right);
        }

        // check for left
        if (currentNode.left) {
            // if exists, add
            stack.push(currentNode.left);
        }
    }
}
