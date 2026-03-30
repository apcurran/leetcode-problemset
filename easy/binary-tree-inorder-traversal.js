function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- DFS recursion
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root, results = []) {
    if (root === null) {
        return results;
    }

    // handle left subtree
    inorderTraversal(root.left, results);
    // handle current node
    results.push(root.val);
    // handle right subtree
    inorderTraversal(root.right, results);

    return results;
}
