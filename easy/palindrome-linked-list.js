"use strict";

// Definition for singly-linked list.
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
//  * @return {boolean}
//  */
// function isPalindrome(head) {
//     let curr = head;
//     let valsArr = [];

//     while (curr !== null) {
//         valsArr.push(curr.val);

//         curr = curr.next;
//     }

//     const forwardOrderValsStr = valsArr.join();
//     const reverseOrderValsStr = valsArr.reverse().join();

//     return forwardOrderValsStr === reverseOrderValsStr;
// }

// /**
//  * solution 2 -- iterative (slight alternative)
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// function isPalindrome(head) {
//     let curr = head;
//     let forwardOrderValsStr = "";
//     let reverseOrderValsStr = "";

//     while (curr !== null) {
//         forwardOrderValsStr = forwardOrderValsStr + curr.val;
//         reverseOrderValsStr = curr.val + reverseOrderValsStr;
//         // traverse to next pointer
//         curr = curr.next;
//     }

//     return forwardOrderValsStr === reverseOrderValsStr;
// }

/**
 * solution 3 -- array and two pointers
 * time: O(n)
 * space: O(n)
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
    let values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return areValuesPalindrome(values);
}

/**
 * @param {number[]} values 
 * @returns {boolean}
 */
function areValuesPalindrome(values) {
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
        if (values[left] !== values[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
