"use strict";


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head
 * @return {number}
 */
function pairSum(head) {
    let current = head;
    let nodeArr = [];
    let maxSum = 0;

    while (current !== null) {
        nodeArr.push(current.val);
        current = current.next;
    }

    for (let i = 0; i < nodeArr.length / 2; i++) {
        const currVal = nodeArr[i];
        const currTwinVal = nodeArr[nodeArr.length - 1 - i];
        const twinSum = currVal + currTwinVal;
        maxSum = Math.max(maxSum, twinSum);
    }

    return maxSum;
}