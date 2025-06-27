"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    let current = head;
    
    while (current !== null) {
        if (current.next !== null && current.val === current.next.val) {
            // Unlink curr node
            current.next = current.next.next;
        } else {
            // Otherwise, iterate to next node
            current = current.next;
        }
    }

    return head;
}
