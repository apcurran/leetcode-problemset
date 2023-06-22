"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let current = head;
    let previous = null;

    while (current !== null) {
        // save temp next pointer
        const tempNextPointer = current.next;
        // make next pointer point to previous
        current.next = previous;
        // move previous pointer current node
        previous = current;
        // move current pointer to next node in list
        current = tempNextPointer;
    }

    return previous;
}

console.log( reverseList(a) ); // 5 -> 4 -> 3 -> 2 -> 1

