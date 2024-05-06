"use strict";

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// /**
//  * solution 1 -- iterative
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// function removeNodes(head) {
//     let stack = [];
//     let current = head;

//     while (current !== null) {
//         stack.push(current);
//         current = current.next;
//     }

//     // check stack with nodes
//     current = stack.pop();
//     let maxValue = current.val;
//     let resultList = new ListNode(maxValue);

//     while (stack.length > 0) {
//         current = stack.pop();

//         if (current.val < maxValue) {
//             continue;
//         } else {
//             const newNode = new ListNode(current.val);
//             newNode.next = resultList;
//             resultList = newNode;
//             maxValue = current.val;
//         }
//     }

//     return resultList;
// }

/**
 * solution 1 -- recursive
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeNodes(head) {
    // reached the end of the linked list
    if (head === null || head.next === null) {
        return head;
    }

    const nextNode = removeNodes(head.next);

    if (head.val < nextNode.val) {
        // if current node's val is less than next node's val,
        // delete current node by returning nextNode
        return nextNode;
    } else {
        // otherwise, keep current node
        head.next = nextNode;

        return head;
    }
}
