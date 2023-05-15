"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
    let fastPointer = head;
    let slowPointer = head;
    let firstNode = head;
    let secondNode = head;

    for (let i = 0; i < k - 1; i++) {
        fastPointer = fastPointer.next;
    }

    firstNode = fastPointer;

    while (fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    // we are at the second node now
    secondNode = slowPointer;

    const tempValue = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = tempValue;

    return head;
}
