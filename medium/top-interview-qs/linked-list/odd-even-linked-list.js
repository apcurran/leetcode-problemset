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
 * @return {ListNode}
 */
function oddEvenList(head) {
    if (head === null) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    // build separate even and odd lists
    while (even !== null && even.next !== null) {
        // set odd node
        odd.next = even.next;
        // move odd pointer
        odd = odd.next;
        // set even node
        even.next = odd.next;
        // move even pointer
        even = even.next;
    }

    // connect end of odd list to start of even list
    odd.next = evenHead;

    // beginning of revised list
    return head;
}
