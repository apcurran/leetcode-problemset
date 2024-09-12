"use strict";

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * solution 1 -- recursive
 * time: O(n * m)
 * space: O(n + m)
 * 
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSubPath(head, root) {
    /**
     * @param {ListNode} currentListNode 
     * @param {TreeNode} currentTreeNode 
     * @returns {boolean}
     */
    function helper(currentListNode, currentTreeNode) {
        if (!currentListNode) {
            return true;
        }

        if (!currentTreeNode || currentListNode.val !== currentTreeNode.val) {
            return false;
        }

        // otherwise, traverse linked list and tree left and right
        return (
            helper(currentListNode.next, currentTreeNode.left) ||
            helper(currentListNode.next, currentTreeNode.right)
        );
    }
    
    if (helper(head, root)) {
        return true;
    }

    if (!root) {
        return false;
    }

    return (
        isSubPath(head, root.left) ||
        isSubPath(head, root.right)
    );
}
