"use strict";

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {ListNode} head
//  * @return {number}
//  */
// function pairSum(head) {
//     let current = head;
//     let nodeArr = [];
//     let maxSum = 0;

//     while (current !== null) {
//         nodeArr.push(current.val);
//         current = current.next;
//     }

//     for (let i = 0; i < nodeArr.length / 2; i++) {
//         const currVal = nodeArr[i];
//         const currTwinVal = nodeArr[nodeArr.length - 1 - i];
//         const twinSum = currVal + currTwinVal;
//         maxSum = Math.max(maxSum, twinSum);
//     }

//     return maxSum;
// }

/**
 * solution 2 - update three pointers (slow, fast, and previous)
 * time: O(n)
 * space: O(1)
 *
 * @param {ListNode} head
 * @return {number}
 */
function pairSum(head) {
    let slow = head;
    let fast = head;
    let previous = null;

    while (fast !== null && fast.next !== null) {
        // fast pointer moves two nodes at a time
        fast = fast.next.next;
        // save value that will be updated
        const temp = slow.next;
        // update next pointer to point to last (previous) pointer
        slow.next = previous;
        // update previous pointer to point to current slow pointer
        previous = slow;
        // move slow pointer to the next node
        slow = temp;
    }

    let maxSum = 0;

    while (slow !== null) {
        const twinSum = previous.val + slow.val;
        // update max sum
        maxSum = Math.max(maxSum, twinSum);

        // move pointers
        previous = previous.next;
        slow = slow.next;
    }

    return maxSum;
}
