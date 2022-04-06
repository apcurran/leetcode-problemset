"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// /**
//  * solution 2 -- recursive
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// function reverseList(head) {
//     // base case
//     if (head === null) return null;

//     let newHead = head;

//     if (head.next) {
//         newHead = reverseList(head.next);
//         // reverse link
//         head.next.next = head;
//     }

//     head.next = null;

//     return newHead;
// }