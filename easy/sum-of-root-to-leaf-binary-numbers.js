// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- recursive DFS
 * time: O(n)
 * space: O(n) -- callstack size
 *
 * @param {TreeNode} root
 * @return {number}
 */
function sumRootToLeaf(root) {
    let total = 0;

    /**
     * @param {TreeNode} root
     * @param {number} currentValue
     * @returns {void} -- side effect update of total var
     */
    function dfs(root, currentValue) {
        if (root === null) {
            return;
        }

        const updatedCurrentValue = currentValue * 2 + root.val;

        if (!root.left && !root.right) {
            // hit a leaf node
            // add to total
            total += updatedCurrentValue;

            return;
        }

        // traverse sub trees left and right
        dfs(root.left, updatedCurrentValue);
        dfs(root.right, updatedCurrentValue);
    }

    dfs(root, 0);

    return total;
}
