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
function swapPairs(head) {
    // initialize dummy's next pointer to head of list
    let dummyNode = new ListNode(0, head);
    let previousNode = dummyNode;
    let currentNode = head;

    while (currentNode && currentNode.next) {
        // save pointers
        const nextPair = currentNode.next.next;
        const nextNode = currentNode.next;

        // reverse this pair
        nextNode.next = currentNode;
        currentNode.next = nextPair;
        previousNode.next = nextNode;

        // update pointers
        previousNode = currentNode;
        currentNode = nextPair;
    }

    return dummyNode.next;
}