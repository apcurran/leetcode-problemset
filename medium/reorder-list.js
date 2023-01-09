"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1
 * time: O(n)
 * time: O(1)
 * 
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    let slow = head;
    let fast = head.next;

    // travel to the beginning of the second half of the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // we now have the beginning of the second half
    let secondHalfOfList = slow.next;
    slow.next = null;
    let previous = null;

    while (secondHalfOfList !== null) {
        const temp = secondHalfOfList.next;
        secondHalfOfList.next = previous;
        // update pointers
        previous = secondHalfOfList;
        secondHalfOfList = temp;
    }

    // merge two halves of list
    let firstHalfOfList = head;
    secondHalfOfList = previous;

    while (secondHalfOfList !== null) {
        const temp1 = firstHalfOfList.next;
        const temp2 = secondHalfOfList.next;

        firstHalfOfList.next = secondHalfOfList;
        secondHalfOfList.next = temp1;
        // move pointers
        firstHalfOfList = temp1;
        secondHalfOfList = temp2;
    }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

console.log( reorderList(a) ); // list of 1 -> 4 -> 2 -> 3
