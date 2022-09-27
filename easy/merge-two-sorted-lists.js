"use strict";


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1 -- iterative
 * time: O(min(n, m))
 * space: O(n + m) -> generates a new list with all nodes
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // covers edge case of inserting into an empty list
    let dummyNode = new ListNode();
    let tail = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            // add to list
            tail.next = list1;
            // move pointer forward
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    // tack on the rest of list1 if some still exists after while loop finishes
    if (list1 !== null) tail.next = list1;
    // tack on the rest of list2 if some still exists after while loop finishes
    if (list2 !== null) tail.next = list2;

    // return newly formed list without the initial empty dummy node
    return dummyNode.next;
}