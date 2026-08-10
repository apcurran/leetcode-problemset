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
//  * @return {number[]}
//  */
// function inorderTraversal(root, results = []) {
//     if (root === null) {
//         return results;
//     }

//     // handle left subtree
//     inorderTraversal(root.left, results);
//     // handle current node
//     results.push(root.val);
//     // handle right subtree
//     inorderTraversal(root.right, results);

//     return results;
// }

/**
 * solution 2 -- DFS iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    let stack = [];
    let results = [];
    let current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            // exhaust left subtree before checking current node's value
            stack.push(current);
            current = current.left;
        }
        // handle current node
        current = stack.pop();
        results.push(current.val);
        // travel to right subtree
        current = current.right;
    }

    return results;
}
