"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// function middleNode(head) {
//     let current = head;
//     let nodeArr = [];

//     while (current !== null) {
//         // add curr node to arr
//         nodeArr.push(current);
//         // traverse to next node
//         current = current.next;
//     }

//     const midIndex = Math.floor(nodeArr.length / 2);

//     return nodeArr[midIndex];
// }

/**
 * solution 2 -- two-pointer technique
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        // move slow pointer by one
        slowPointer = slowPointer.next;
        // move fast pointer by two
        fastPointer = fastPointer.next.next;
    }

    // slow pointer must be in the middle of the list when the fast pointer is at the end
    return slowPointer;
}
