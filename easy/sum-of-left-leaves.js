"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- DFS iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
    let stack = [root];
    let leftLeavesSum = 0;

    while (stack.length > 0) {
        const currentNode = stack.pop();

        if (currentNode?.right) {
            stack.push(currentNode.right);
        }

        if (currentNode?.left) {
            stack.push(currentNode.left);

            if (currentNode.left.left === null && currentNode.left.right === null) {
                leftLeavesSum += currentNode.left.val;
            }
        }
    }

    return leftLeavesSum;
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log( sumOfLeftLeaves(a) ); // 4
