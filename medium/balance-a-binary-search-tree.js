"use strict";

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- inorder recursive
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {TreeNode|null}
 */
function balanceBST(root) {
    if (root === null) return null;

    let inOrderNodeValues = [];
    // build sorted inorder list
    inOrderTraversal(root, inOrderNodeValues);

    return createBalancedBST(
        inOrderNodeValues,
        0,
        inOrderNodeValues.length - 1,
    );
}

/**
 * @param {TreeNode} root
 * @param {number[]} inOrderValues
 * @returns {void}
 */
function inOrderTraversal(root, inOrderValues) {
    if (root === null) return;

    inOrderTraversal(root.left, inOrderValues);
    inOrderValues.push(root.val);
    inOrderTraversal(root.right, inOrderValues);
}

/**
 * @param {number[]} inorderList
 * @param {number} start
 * @param {number} end
 * @returns {TreeNode|null}
 */
function createBalancedBST(inorderList, start, end) {
    // base case, if the start index is greater than end index, return null
    if (start > end) return null;

    const middle = Math.floor(start + (end - start) / 2);
    const leftSubtree = createBalancedBST(inorderList, start, middle - 1);
    const rightSubtree = createBalancedBST(inorderList, middle + 1, end);
    const node = new TreeNode(inorderList[middle], leftSubtree, rightSubtree);

    return node;
}
