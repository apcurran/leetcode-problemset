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
function findTilt(root) {
    /**
     * @param {TreeNode} root 
     * @param {number} tiltSum 
     * @returns {number}
     */
    function postOrderRecursion(root) {
        if (root === null) return 0;
    
        const leftSum = postOrderRecursion(root.left);
        const rightSum = postOrderRecursion(root.right);
        const tilt = Math.abs(leftSum - rightSum);
        tiltSum += tilt;
    
        return leftSum + rightSum + root.val;
    }

    let tiltSum = 0;

    postOrderRecursion(root);

    return tiltSum;
}


const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);

a.left = b;
a.right = c;

console.log( findTilt(a) ); // 1

