// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(h)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
    return traverseBinTree(root, root.val, root.val);
}

/**
 * @param {TreeNode} root 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function traverseBinTree(root, min, max) {
    if (root === null) {
        const largestDifference = max - min;

        return largestDifference;
    }

    const currentMin = Math.min(min, root.val);
    const currentMax = Math.max(max, root.val);
    const largestDifferenceOfLeftSubtree = traverseBinTree(root.left, currentMin, currentMax);
    const largestDifferenceOfRightSubtree = traverseBinTree(root.right, currentMin, currentMax);

    return Math.max(largestDifferenceOfLeftSubtree, largestDifferenceOfRightSubtree);
}
