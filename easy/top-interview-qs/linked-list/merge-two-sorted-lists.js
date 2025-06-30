"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode}
 */
function mergeTwoLists(list1, list2) {
    let dummyNode = new ListNode();
    let tail = dummyNode;

    // iterate as long as list1 and list2 are not empty
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            // add list1 val first, since the res list is sorted smallest -> biggest
            tail.next = list1;
            // move pointer
            list1 = list1.next;
        } else {
            // add list2 val, since it is smaller here
            tail.next = list2;
            // move pointer
            list2 = list2.next;
        }

        // either way, always move tail pointer forward
        tail = tail.next;
    }

    // after iteration, check if list1 or list2 still have some nodes left
    if (list1 !== null) tail.next = list1;

    if (list2 !== null) tail.next = list2;

    return dummyNode.next;
}
