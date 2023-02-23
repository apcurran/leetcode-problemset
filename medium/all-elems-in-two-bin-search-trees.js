"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1
 * k = n + m
 * time: O(k * log k)
 * space: O(k)
 * 
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
    let allBinTreeValues = [];

    let root1Stack = [root1];

    while (root1Stack.length > 0) {
        // get current node
        // add node vals of root 1
        const currentNode = root1Stack.pop();

        if (currentNode === null) continue;

        allBinTreeValues.push(currentNode.val);

        // check for right children
        if (currentNode.right) {
            root1Stack.push(currentNode.right);
        }
        // check for left children
        if (currentNode.left) {
            root1Stack.push(currentNode.left);
        }
    }

    // add node vals of root 2
    let root2Stack = [root2];

    while (root2Stack.length > 0) {
        const currentNode = root2Stack.pop();

        if (currentNode === null) continue;

        allBinTreeValues.push(currentNode.val);

        if (currentNode.right) {
            root2Stack.push(currentNode.right);
        }

        if (currentNode.left) {
            root2Stack.push(currentNode.left);
        }
    }

    // sort results
    allBinTreeValues.sort((a, b) => a - b);
    // return results
    return allBinTreeValues;
}
