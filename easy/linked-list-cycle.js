"use strict";

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * solution 1 -- tortoise and hare pointers (slow -> incr by one, fast -> incr by two)
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    let slow = head;
    let fast = head;

    // cannot loop unless the current fast pointer node exists, and
    // the fast's next next node must exist (we access fast.next.next,
    // if this was null we would be accessing null.next which fails)
    while (fast !== null && fast.next !== null) {
        // incr by one
        slow = slow.next;
        // incr by two
        fast = fast.next.next;
        // if both meet at the same node, there was a cycle
        if (slow === fast) return true;
    }

    return false;
}

// /**
//  * solution 2 -- Set obj
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// function hasCycle(head) {
//     let curr = head;
//     let visitedNodes = new Set();

//     while (curr !== null) {
//         // check for re-occurrence of node (indicating a cycle)
//         if (visitedNodes.has(curr)) return true;
//         // add node to Set
//         visitedNodes.add(curr);
//         // traverse to next node
//         curr = curr.next;
//     }

//     return false;
// }

// /**
//  * solution 3 -- flag visited nodes
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// function hasCycle(head) {
//     let current = head;

//     while (current !== null) {
//         if (current.hasSeen === true) {
//             return true;
//         }

//         // mark node with hasSeen flag
//         current.hasSeen = true;
//         current = current.next;
//     }

//     return false;
// }
