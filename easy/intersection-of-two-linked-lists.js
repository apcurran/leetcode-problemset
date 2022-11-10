"use strict";

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * solution 1 -- iterative w/ Set obj
 * n = list 1 len
 * m = list 2 len
 * time: O(n + m)
 * space: O(n)
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode|null}
 */
function getIntersectionNode(headA, headB) {
    let nodesSet = new Set();

    let currA = headA;

    while (currA !== null) {
        // read val
        nodesSet.add(currA);
        // move pointer
        currA = currA.next;
    }

    let currB = headB;

    while (currB !== null) {
        // check if contained in Set obj
        if (nodesSet.has(currB)) return currB;
        // otherwise move pointer
        currB = currB.next;
    }

    // no intersection at all
    return null;
}
