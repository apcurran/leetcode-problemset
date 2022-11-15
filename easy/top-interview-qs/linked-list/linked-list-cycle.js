"use strict";

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * solution 1 -- Set obj
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    let prevNodes = new Set();
    let currNode = head;

    while (currNode !== null) {
        // there is a cycle which caused us to reach this node again
        if (prevNodes.has(currNode)) return true;
        // otherwise, hash node
        prevNodes.add(currNode);
        // move iterator
        currNode = currNode.next;
    }

    // if we reach this point, the while loop ended without reaching a cycle
    return false;
}