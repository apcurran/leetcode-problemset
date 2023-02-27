// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// /**
//  * solution 1 -- recursion
//  * time: O(n)
//  * space: O(h)
//  * 
//  * @param {TreeNode} root
//  * @return {number}
//  */
// function maxAncestorDiff(root) {
//     return traverseBinTree(root, root.val, root.val);
// }

// /**
//  * @param {TreeNode} root 
//  * @param {number} min 
//  * @param {number} max 
//  * @returns {number}
//  */
// function traverseBinTree(root, min, max) {
//     if (root === null) {
//         const largestDifference = max - min;

//         return largestDifference;
//     }

//     const currentMin = Math.min(min, root.val);
//     const currentMax = Math.max(max, root.val);
//     const largestDifferenceOfLeftSubtree = traverseBinTree(root.left, currentMin, currentMax);
//     const largestDifferenceOfRightSubtree = traverseBinTree(root.right, currentMin, currentMax);

//     return Math.max(largestDifferenceOfLeftSubtree, largestDifferenceOfRightSubtree);
// }

/**
 * solution 2 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
    if (root === null) return 0;
    //            [ [rootNode, min, max] ]
    let stack = [ [root, root.val, root.val] ];
    let largestDifference = 0;

    while (stack.length > 0) {
        const [node, previousMin, previousMax] = stack.pop();
        // calculate new min, max, and largest difference so far
        const currentMin = Math.min(previousMin, node.val);
        const currentMax = Math.max(previousMax, node.val);
        const currentDifference = currentMax - currentMin;
        // update largest diff
        largestDifference = Math.max(largestDifference, currentDifference);

        // check right child
        if (node.right !== null) {
            stack.push([node.right, currentMin, currentMax]);
        }
        // check left child
        if (node.left !== null) {
            stack.push([node.left, currentMin, currentMax]);
        }
    }

    return largestDifference;
}
