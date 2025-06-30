"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    let binaryStr = "";
    // iterate each value in list
    while (head !== null) {
        // add bin val to string
        binaryStr += head.val;
        // move pointer to next link in list
        head = head.next;
    }

    // convert bin string to number with parseInt(str, 2)
    return parseInt(binaryStr, 2);
}
