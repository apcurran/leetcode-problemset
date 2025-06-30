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

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// function reverseList(head) {
//     let current = head;
//     let previous = null;

//     while (current !== null) {
//         // save temp next pointer
//         const tempNextPointer = current.next;
//         // make next pointer point to previous
//         current.next = previous;
//         // move previous pointer current node
//         previous = current;
//         // move current pointer to next node in list
//         current = tempNextPointer;
//     }

//     return previous;
// }

// /**
//  * solution 2 -- recursive
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {ListNode} head
//  * @return {ListNode|null}
//  */
// function reverseList(head) {
//     if (head === null) return null;

//     let newHead = head;

//     if (head.next) {
//         newHead = reverseList(head.next);
//         head.next.next = head;
//     }

//     head.next = null;

//     return newHead;
// }

/**
 * solution 3 -- recursive alternative
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} head
 * @return {ListNode|null}
 */
function reverseList(head, previous = null) {
    if (head === null) return previous;

    const nextTemp = head.next;
    head.next = previous;

    return reverseList(nextTemp, head);
}

console.log(reverseList(a)); // 5 -> 4 -> 3 -> 2 -> 1
