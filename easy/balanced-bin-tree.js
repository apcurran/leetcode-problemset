"use strict";

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// function isBalanced(root) {
//     if (root === null) return true;

//     const leftSubtree = getDepth(root.left);
//     const rightSubtree = getDepth(root.right);
//     const subtreesDiff = Math.abs(leftSubtree - rightSubtree);

//     const isLeftSubtreeBalanced = isBalanced(root.left);
//     const isRightSubtreeBalanced = isBalanced(root.right);

//     return subtreesDiff <= 1 && isLeftSubtreeBalanced && isRightSubtreeBalanced;
// }

// /**
//  * @param {TreeNode} root
//  * @returns {number}
//  */
// function getDepth(root) {
//     if (root === null) return 0;

//     const leftSubtreeDepth = getDepth(root.left);
//     const rightSubtreeDepth = getDepth(root.right);

//     return 1 + Math.max(leftSubtreeDepth, rightSubtreeDepth);
// }

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    /**
     * @param {TreeNode} root
     * @returns {[boolean, number]} [isSubtreeBalanced, subtreeHeight]
     */
    function dfs(root) {
        if (root === null) {
            // a null node is a zero-height, balanced tree since height 0 is technically balanced
            return [true, 0];
        }

        const leftSubtree = dfs(root.left);
        const rightSubtree = dfs(root.right);
        const heightDiff = Math.abs(leftSubtree[1] - rightSubtree[1]);
        const areSubtreesBalanced = leftSubtree[0] && rightSubtree[0];
        // subtrees (left and right) must be balanced first
        // also, the difference between left and right heights must differ by no more than 1 (definition of height-balanced trees)
        const isCurrentBalanced = areSubtreesBalanced && heightDiff <= 1;
        const currentNodeHeight = 1;
        const currentHeight = currentNodeHeight + Math.max(leftSubtree[1], rightSubtree[1]);

        return [isCurrentBalanced, currentHeight];
    }

    return dfs(root)[0];
}
