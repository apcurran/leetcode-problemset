"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- BFS
 * n = height of tree
 * m = nodes per level in tree
 * l = total levels
 * time: O(n * (m^2))
 * space: O(l + m)
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
    let queue = [root];
    let levelsAvgs = [];

    while (queue.length > 0) {
        const qLen = queue.length;
        let rowSum = 0;
        
        for (let i = 0; i < qLen; i++) {
            // get sum for all node vals in curr level
            const node = queue.shift();
            rowSum += node.val;

            if (node.left) queue.push(node.left);
    
            if (node.right) queue.push(node.right);
        }

        const rowAvg = rowSum / qLen;
        levelsAvgs.push(rowAvg);
    }

    return levelsAvgs;
}
