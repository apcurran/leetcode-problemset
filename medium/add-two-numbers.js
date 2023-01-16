"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1 -- iterative
 * time: O(max(m, n))
 * space: O(max(m, n))
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function addTwoNumbers(list1, list2) {
    // use a dummy node to avoid edge case of inserting into a linked list
    const dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    // keep going while there are still nodes in list 1 or list 2 OR there is a carry number leftover
    while (list1 !== null || list2 !== null || carry !== 0) {
        // set to vals if not null, otherwise 0 (since there l1 or l2 may be null but still needs to be added with the other number)
        const list1Value = list1 !== null ? list1.val : 0;
        const list2Value = list2 !== null ? list2.val : 0;

        const sum = list1Value + list2Value + carry;
        carry = Math.floor(sum / 10);
        const newDigitOnesPlace = sum % 10;
        current.next = new ListNode(newDigitOnesPlace);

        // update pointers
        current = current.next;

        if (list1 !== null) {
            list1 = list1.next;
        }

        if (list2 !== null) {
            list2 = list2.next;
        }
    }

    return dummyHead.next;
}