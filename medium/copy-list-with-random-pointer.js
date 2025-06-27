"use strict";

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    // set null val to map to null
    let nodesCache = new Map([
        [null, null],
    ]);
    let current = head;

    while (current !== null) {
        const nodeCopy = new Node(current.val);
        nodesCache.set(current, nodeCopy);
        // move pointer
        current = current.next;
    }

    // reset curr to beginning of the list
    current = head;
    // second pass
    while (current !== null) {
        const nodeCopy = nodesCache.get(current);
        nodeCopy.next = nodesCache.get(current.next);
        nodeCopy.random = nodesCache.get(current.random);
        // move pointer
        current = current.next;
    }

    // return head of copied list
    return nodesCache.get(head);
}
