"use strict";

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// /**
//  * solution 1 -- DFS iterative
//  * time: O(log n) -- halving each time until LCA node is found
//  * space: O(1)
//  *
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {TreeNode}
//  */
// function lowestCommonAncestor(root, p, q) {
//     let currentNode = root;

//     while (currentNode !== null) {
//         if (p.val < currentNode.val && q.val < currentNode.val) {
//             // move left
//             currentNode = currentNode.left;
//         } else if (p.val > currentNode.val && q.val > currentNode.val) {
//             // move right
//             currentNode = currentNode.right;
//         } else {
//             // found LCA node
//             return currentNode;
//         }
//     }
// }

/**
 * solution 1 -- DFS recursion
 * time: O(log n) -- halving each time until LCA node is found
 * space: O(log n)
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        // move left
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        // move right
        return lowestCommonAncestor(root.right, p, q);
    } else {
        // found LCA node
        return root;
    }
}

const a = new TreeNode(6);
const b = new TreeNode(2);
const c = new TreeNode(8);
const d = new TreeNode(0);
const e = new TreeNode(4);
const f = new TreeNode(3);
const g = new TreeNode(5);
const h = new TreeNode(7);
const i = new TreeNode(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;
c.left = h;
c.right = i;

console.log(lowestCommonAncestor(a, b, c)); // node -> val === 6
