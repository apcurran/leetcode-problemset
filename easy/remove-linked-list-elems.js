"use strict";


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @param {number} targetVal
 * @return {ListNode}
 */
function removeElements(head, targetVal) {
    // next ptr is pointing to head
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;

        if (curr.val === targetVal) {
            // skip over to delete node from list
            prev.next = next;
        } else {
            // shift to right
            prev = curr;
        }

        // always traverse to the next node
        curr = next;
    }

    return dummy.next;
}