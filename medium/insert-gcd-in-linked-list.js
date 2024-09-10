"use strict";

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * solution 1 -- simulation
 * time: O(n * log(min(a, b)))
 * space: O(1)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertGreatestCommonDivisors(head) {
    if (head.next === null) return head;

    let node1 = head;
    let node2 = head.next;

    while (node2 !== null) {
        const gcdValue = gcd(node1.val, node2.val);
        const gcdNode = new ListNode(gcdValue);

        // insert GCD node between node1 and node2
        node1.next = gcdNode;
        gcdNode.next = node2;

        // traverse forwards
        node1 = node2;
        node2 = node2.next;
    }

    return head;
}

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}
