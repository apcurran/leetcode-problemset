"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- prefix sum for consecutive sequence
 * time: O(n^2)
 * space: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeZeroSumSublists(head) {
    let front = new ListNode(0, head); // dummy node with 0 value, next points to head
    let start = front;

    while (start !== null) {
        let prefixSum = 0;
        let end = start.next;

        while (end !== null) {
            prefixSum += end.val;

            // delete zero sum sequence
            if (prefixSum === 0) {
                start.next = end.next;
            }

            // move end pointer
            end = end.next;
        }

        // move start pointer
        start = start.next;
    }

    // head of revised linked list
    return front.next;
}
