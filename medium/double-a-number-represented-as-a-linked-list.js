"use strict";

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const a = new ListNode(1);
const b = new ListNode(8);
const c = new ListNode(9);

a.next = b;
b.next = c;

/**
 * solution 1 -- recursion
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function doubleIt(head) {
    const carry = doubleNodeValue(head);

    if (carry !== 0) {
        // insert new node at the beginning of the linked list
        head = new ListNode(carry, head);
    }

    return head;
}

/**
 * @param {ListNode} head 
 * @returns {number}
 */
function doubleNodeValue(head) {
    if (head === null) {
        return 0;
    }

    // double the value of the current node value and add the result of next nodes' values
    const doubledValue = (head.val * 2) + doubleNodeValue(head.next);
    // update current node's value to be the units digit of the result
    head.val = doubledValue % 10;

    // return the carry digit
    return Math.floor(doubledValue / 10);
}

console.log(doubleIt(a)); // 3 -> 7 -> 8
