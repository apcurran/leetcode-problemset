"use strict";

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
    let dummy = new ListNode(0, head);
    let leftPrevious = dummy;
    let current = head;

    for (let i = 0; i < left - 1; i++) {
        leftPrevious = current;
        current = current.next;
    }

    let previous = null;

    for (let i = 0; i < right - left + 1; i++) {
        const tempNext = current.next;
        // break next link and reverse
        current.next = previous;
        previous = current;
        current = tempNext;
    }

    // update pointers
    leftPrevious.next.next = current; // current is node after right
    leftPrevious.next = previous; // previous is right node

    return dummy.next;
}
