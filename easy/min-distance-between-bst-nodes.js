"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function minDiffInBST(root) {
    // get all values put into an array
    let values = dfs(root, []);
    // sort ASC
    values.sort((a, b) => a - b);
    let minDifference = values[1] - values[0];

    // iterate array, checking for diff between two values
    for (let i = 1; i < values.length - 1; i++) {
        const currentValue = values[i];
        const nextValue = values[i + 1];
        const currentDifference = nextValue - currentValue;
        // record smallest diff from values
        if (currentDifference < minDifference) {
            minDifference = currentDifference;
        }
    }
    // return smallest values diff
    return minDifference;
}

/**
 * 
 * @param {TreeNode} root 
 * @param {number[]} values 
 * @returns {number[]}
 */
function dfs(root, values) {
    if (root === null) return values;

    // add value to array
    values.push(root.val);
    // traverse left
    dfs(root.left, values);
    // traverse right
    dfs(root.right, values);
    // return values
    return values;
}
