"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * solution 1 -- iterative (pointers)
 * n = list 1
 * m = list 2
 * time: O(n + m)
 * space: O(1)
 * 
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeInBetween(list1, a, b, list2) {
    // iterate list1 until a position
    let current = list1;
    let i = 0;

    while (i < a - 1) {
        // iterate pointer to just before a position
        current = current.next;
        i++;
    }

    let head = current;

    // iterate pointer to b position
    while (i <= b) {
        current = current.next;
        i++;
    }

    head.next = list2;
    // remove nodes from a to b by linking node prior to a with list2 and list2 next to node after b
    while (list2.next !== null) {
        list2 = list2.next;
    }

    list2.next = current;

    return list1;
}
