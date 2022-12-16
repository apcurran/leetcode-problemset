"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1 -- two pointers with dummy node technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const dummyNode = new ListNode(0, head);
    let leftPointer = dummyNode;
    let rightPointer = head;

    // initialize right pointer to be (head + n)
    while (n > 0 && rightPointer !== null) {
        rightPointer = rightPointer.next;
        n--;
    }

    // keep iterating until we reach the end of the list
    while (rightPointer !== null) {
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }

    // right pointer is now at the end
    // delete node
    leftPointer.next = leftPointer.next.next;

    return dummyNode.next;
}