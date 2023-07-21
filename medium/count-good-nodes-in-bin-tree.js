"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// /**
//  * solution 1 -- recursion
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {TreeNode} root
//  * @return {number}
//  */
// function goodNodes(root) {
//     let goodNodesCount = 0;

//     /**
//      * @param {TreeNode} root 
//      * @param {number} maxValue 
//      * @returns {void}
//      */
//     function dfs(root, maxValue) {
//         if (root === null) return;
    
//         if (root.val >= maxValue) {
//             maxValue = root.val;
//             goodNodesCount++;
//         }

//         dfs(root.left, maxValue);
//         dfs(root.right, maxValue);
//     }

//     dfs(root, root.val);

//     return goodNodesCount;
// }

/**
 * solution 2 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function goodNodes(root) {
    let goodNodesCount = 0;
    let stack = [[root, root.val]];

    while (stack.length > 0) {
        let [node, maxValueSoFar] = stack.pop();
        
        if (node.val >= maxValueSoFar) {
            goodNodesCount++;
            maxValueSoFar = node.val;
        }

        if (node.right) {
            stack.push([node.right, maxValueSoFar]);
        }

        if (node.left) {
            stack.push([node.left, maxValueSoFar]);
        }
    }
    
    return goodNodesCount;
}



const a = new TreeNode(3);
const b = new TreeNode(1);
const c = new TreeNode(4);
const d = new TreeNode(3);
const e = new TreeNode(1);
const f = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;

console.log( goodNodes(a) ); // 4
