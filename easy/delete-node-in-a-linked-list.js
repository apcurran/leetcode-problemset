"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Time: O(1)
 * Space: O(1)
 * 
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
    if (node.val === null || node.next === null) return;

    node.val = node.next.val;
    node.next = node.next.next;
}