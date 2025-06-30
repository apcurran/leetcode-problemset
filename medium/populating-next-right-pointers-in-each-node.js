"use strict";

function ListNode(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- BFS
 * time: O(n^2)
 * space: O(n)
 *
 * @param {ListNode} root
 * @return {ListNode}
 */
function connect(root) {
    if (root === null) return root;

    let queue = [root];

    while (queue.length > 0) {
        let next = [];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            currentNode.next = queue[0] || null;

            if (currentNode.left !== null) {
                next.push(currentNode.left, currentNode.right);
            }
        }

        queue = next;
    }

    return root;
}
