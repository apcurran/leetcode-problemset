"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
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
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    // check for empty linked list
    if (head === null) return head;

    // get length of list
    let listLength = 1;
    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
        listLength++;
    }

    const kSimplified = k % listLength;

    if (kSimplified === 0) return head;

    let current = head;
    // move to the pivot point and rotate list
    for (let i = 0; i < listLength - kSimplified - 1; i++) {
        current = current.next;
    }

    // current pointer is at pivot point now
    const updatedHead = current.next;
    // break chain
    current.next = null;
    // reconnect chain
    tail.next = head;

    // start of the list after rotation
    return updatedHead;
}

console.log(rotateRight(a, 2)); // 4 -> 5 -> 1 -> 2 -> 3
