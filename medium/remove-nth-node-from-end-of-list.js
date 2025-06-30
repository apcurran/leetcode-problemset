"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- one pointer, two passes
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @param {number} nthFromEnd
 * @return {ListNode}
 */
function removeNthFromEnd(head, nthFromEnd) {
    let current = head;
    let listLength = 0;

    // first, we need to count the length of the entire linked list
    while (current !== null) {
        current = current.next;
        listLength++;
    }

    // EDGE CASE:
    // if we need to remove the head (first) node,
    // simply return the head's next pointer (second node)
    if (listLength === nthFromEnd) return head.next;

    // reuse pointer by reseting position back to the beginning
    current = head;

    // this will stop at the node before the one to be deleted
    for (let i = 1; i < listLength - nthFromEnd; i++) {
        current = current.next;
    }

    // we are at the node before the one to be removed
    // remove next node by updating pointer
    current.next = current.next.next;

    return head;
}

// /**
//  * solution 2 -- two pointers with dummy node technique
//  * time: O(n)
//  * space: O(1)
//  *
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// function removeNthFromEnd(head, n) {
//     const dummyNode = new ListNode(0, head);
//     let leftPointer = dummyNode;
//     let rightPointer = head;

//     // initialize right pointer to be (head + n)
//     while (n > 0 && rightPointer !== null) {
//         rightPointer = rightPointer.next;
//         n--;
//     }

//     // keep iterating until we reach the end of the list
//     while (rightPointer !== null) {
//         leftPointer = leftPointer.next;
//         rightPointer = rightPointer.next;
//     }

//     // right pointer is now at the end
//     // delete node
//     leftPointer.next = leftPointer.next.next;

//     return dummyNode.next;
// }
