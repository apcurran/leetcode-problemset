// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * solution 1 -- BFS
 * time: O(n^2)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
    if (root === null) return [];

    let queue = [root];

    let maxSum = -Infinity;
    let maxLevelIndex = 1;
    let currentLevelIndex = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelSum += currentNode.val;

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        // sum of all level node values is finished, ready for check
        // check for a max level sum (at the highest-up level of tree)
        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevelIndex = currentLevelIndex;
        }

        currentLevelIndex++;
    }

    return maxLevelIndex;
}
