"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- DFS
 * time: O(n^2)
 * space: O(n + m)
 * 
 * @param {TreeNode} root
 * @return {string}
 */
function smallestFromLeaf(root) {
    /**
     * @param {TreeNode} root 
     * @param {string} currentStr 
     * @returns {string}
     */
    function helper(root, currentStr) {
        if (root === null) return currentStr;

        const aCharCode = 97;
        currentStr = String.fromCharCode(aCharCode + root.val) + currentStr;

        if (root.left !== null && root.right !== null) {
            const leftSubtree = helper(root.left, currentStr);
            const rightSubtree = helper(root.right, currentStr);

            if (leftSubtree < rightSubtree) {
                return leftSubtree;
            } else {
                return rightSubtree;
            }
        }

        if (root.right !== null) {
            // path to leaf must go through right child
            return helper(root.right, currentStr);
        }

        if (root.left !== null) {
            return helper(root.left, currentStr);
        }

        // no left or right child node -> leaf node
        return currentStr;
    }

    return helper(root, "");
}
