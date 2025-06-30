"use strict";

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
function modifiedList(nums, head) {
    const numsSet = new Set(nums);
    let dummyNode = new ListNode(0, head);

    let previous = dummyNode;
    let current = head;

    while (current) {
        if (numsSet.has(current.val)) {
            // delete node
            previous.next = current.next;
        } else {
            previous = previous.next;
        }
        // always travel forward by 1 node
        current = current.next;
    }

    return dummyNode.next; // first node in revised list
}
