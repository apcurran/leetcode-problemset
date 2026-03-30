function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// /**
//  * solution 1 -- DFS recursion
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {TreeNode} root
//  * @param {number[]} [results]
//  * @return {number[]}
//  */
// function postorderTraversal(root, results = []) {
//     if (root === null) {
//         return results;
//     }

//     // handle left subtree
//     postorderTraversal(root.left, results);
//     // handle right subtree
//     postorderTraversal(root.right, results);
//     // handle current node value
//     results.push(root.val);

//     return results;
// }

/**
 * solution 2 -- DFS iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @param {number[]} [results]
 * @return {number[]}
 */
function postorderTraversal(root) {
    let results = [];

    if (root === null) {
        return results;
    }

    let stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        results.push(current.val);

        if (current.left !== null) {
            stack.push(current.left);
        }

        if (current.right !== null) {
            stack.push(current.right);
        }
    }

    results.reverse();

    return results;
}
