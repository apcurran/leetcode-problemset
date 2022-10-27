"use strict";


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(log n)
 * 
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    function recurse(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = recurse(left, mid - 1);
        root.right = recurse(mid + 1, right);

        return root;
    }

    return recurse(0, nums.length - 1);
}