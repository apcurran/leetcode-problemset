"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {ListNode} head
//  * @param {number} targetVal
//  * @return {ListNode}
//  */
// function removeElements(head, targetVal) {
//     // next ptr is pointing to head
//     let dummy = new ListNode(0, head);
//     let prev = dummy;
//     let curr = head;

//     while (curr !== null) {
//         const next = curr.next;

//         if (curr.val === targetVal) {
//             // skip over to delete node from list
//             prev.next = next;
//         } else {
//             // shift to right
//             prev = curr;
//         }

//         // always traverse to the next node
//         curr = next;
//     }

//     return dummy.next;
// }

/**
 * solution 2 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head
 * @param {number} targetVal
 * @return {ListNode}
 */
function removeElements(head, targetVal) {
    // base case 1
    if (head === null) return head;

    // recursive case
    // traverse to next node
    head.next = removeElements(head.next, targetVal);

    // base case 2
    // if curr val is equal to targetVal, skip node (thereby deleting it)
    return head.val === targetVal ? head.next : head;
}
