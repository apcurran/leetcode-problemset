"use strict";

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- BFS
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function minimumOperations(root) {
    /**
     * @param {number[]} nums 
     * @returns {number}
     */
    function getSwapCount(nums) {
        const sortedAscNums = nums.toSorted((a, b) => a - b);
        let indexMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            indexMap.set(nums[i], i);
        }

        let swapCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== sortedAscNums[i]) {
                swapCount++;

                const j = indexMap.get(sortedAscNums[i]);
                // swap values
                [nums[i], nums[j]] = [nums[j], nums[i]];
                indexMap.set(nums[i], i);
                indexMap.set(nums[j], j);
            }
        }

        return swapCount;
    }

    let queue = [root];
    let result = 0;

    while (queue.length > 0) {
        // process each level
        const queueSize = queue.length;
        let levelValues = [];

        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift();
            levelValues.push(node.val);

            if (node?.left) {
                queue.push(node.left);
            }

            if (node?.right) {
                queue.push(node.right);
            }
        }

        result += getSwapCount(levelValues);
    }

    return result;
}
