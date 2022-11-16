"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- BFS
 * n = num of total nodes in bin tree
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    let queue = [root];
    let res = [];

    // iterate while queue has elems
    while (queue.length > 0) {
        const queueLen = queue.length;
        let level = [];

        // iterate through all elems in 
        for (let i = 0; i < queueLen; i++) {
            // remove elem from front of queue
            const currNode = queue.shift();

            // skip work for any null nodes
            if (currNode === null) continue;

            // add to level arr for res
            level.push(currNode.val);
            // add children of currNode to queue (to be iterated later)
            queue.push(currNode.left, currNode.right);
        }

        if (level.length > 0) res.push(level);
    }

    return res;
}