// Definition for a Node.
function TreeNode(val,children) {
   this.val = val;
   this.children = children;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 * 
 * @param {TreeNode|null} root
 * @return {number[]}
 */
function postorder(root) {
    // DFS
    let results = [];
    let stack = [root];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        if (currentNode === null) continue;

        results.push(currentNode.val);
        stack.push(...currentNode.children);
    }

    return results.reverse();
}