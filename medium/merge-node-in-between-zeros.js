"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const a = new ListNode(0);
const b = new ListNode(3);
const c = new ListNode(1);
const d = new ListNode(0);
const e = new ListNode(4);
const f = new ListNode(5);
const g = new ListNode(2);
const h = new ListNode(0);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

/**
 * solution 1 -- slow, but correct
 * time: O(n)
 * space: O(n)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function mergeNodes(head) {
    // iterate linked list
    let currentNode = head;
    let miniSum = 0;
    let sumNodes = [];

    while (currentNode !== null) {
        if (currentNode.val === 0) {
            // create new node
            const newNode = new ListNode(miniSum);
            sumNodes.push(newNode);
            // reset sum total to be 0
            miniSum = 0;
        } else {
            // add value to sum
            miniSum += currentNode.val;
        }
        // move pointer to the next node
        currentNode = currentNode.next;
    }

    // iterate through node values list, skipping the first 0
    for (let i = 1; i < sumNodes.length - 1; i++) {
        const currentNode = sumNodes[i];
        const nextNode = sumNodes[i + 1];

        if (nextNode) {
            currentNode.next = nextNode;
        }
    }

    return sumNodes[1];
}

console.log(mergeNodes(a)); // 4 -> 11
