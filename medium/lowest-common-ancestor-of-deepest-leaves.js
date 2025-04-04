"use strict";

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- DFS (recursion)
 * time: O(n)
 * space: O(n) -- recursive callstack
 * 
 * @param {TreeNode} root
 * @return {TreeNode|null}
 */
function lcaDeepestLeaves(root) {
    /**
     * @param {TreeNode} node 
     * @returns {[TreeNode|null, number]} [LCA, height]
     */
    function dfs(node) {
        if (node == null) {
            return [null, 0];
        }

        const [leftNode, leftHeight] = dfs(node.left);
        const [rightNode, rightHeight] = dfs(node.right);

        if (leftHeight === rightHeight) {
            return [node, leftHeight + 1];
        } else if (leftHeight > rightHeight) {
            return [leftNode, leftHeight + 1];
        } else if (leftHeight < rightHeight) {
            return [rightNode, rightHeight + 1];
        }
    }

    const node = dfs(root)[0];

    return node;
}
