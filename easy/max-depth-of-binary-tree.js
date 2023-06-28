"use strict";

/**
 * solution 1 -- recursive DFS
 * time: O(n)
 * space: O(n) -- callstack
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    const leftSubtreeCount = maxDepth(root.left);
    const rightSubtreeCount = maxDepth(root.right);
    const maxCountofChildSubtrees = Math.max(leftSubtreeCount, rightSubtreeCount);
    const countOfSelfNode = 1;

    return countOfSelfNode + maxCountofChildSubtrees;
}
