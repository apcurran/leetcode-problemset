"use strict";

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// /**
//  * solution 1 -- Set obj
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// function hasCycle(head) {
//     let prevNodes = new Set();
//     let currNode = head;

//     while (currNode !== null) {
//         // there is a cycle which caused us to reach this node again
//         if (prevNodes.has(currNode)) return true;
//         // otherwise, hash node
//         prevNodes.add(currNode);
//         // move iterator
//         currNode = currNode.next;
//     }

//     // if we reach this point, the while loop ended without reaching a cycle
//     return false;
// }

/**
 * solution 2 -- Floyd's Tortoise and Hare (slow & fast ptrs)
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    let slowPtr = head;
    let fastPtr = head;

    // fastPtr.next cannot be null since we are shifting fastPtr by two each iteration
    while (fastPtr !== null && fastPtr.next !== null) {
        // slow moves forward by one
        slowPtr = slowPtr.next;
        // fast moves forward by two
        fastPtr = fastPtr.next.next;
        // a cycle occurred if both ptrs reach the same pos at the same time
        if (slowPtr === fastPtr) return true;
    }

    // fastPtr reached the end of the list before slowPtr -> no cycle occurred
    return false;
}
