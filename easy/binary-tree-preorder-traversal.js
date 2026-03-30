// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root, results = []) {
    if (root === null) {
        return results;
    }

    // take care of node now
    results.push(root.val);
    // recurse on left subtree
    const leftSubtree = preorderTraversal(root.left, results);
    // recurse on right subtree
    const rightSubtree = preorderTraversal(root.right, results);

    return leftSubtree && rightSubtree;
}
