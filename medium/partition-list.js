// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    // initialize both to dummy nodes
    let leftList = new ListNode();
    let rightList = new ListNode();

    let leftTail = leftList;
    let rightTail = rightList;

    while (head !== null) {
        if (head.val < x) {
            // take care of left less than x
            leftTail.next = head;
            // move pointer
            leftTail = leftTail.next;
        } else {
            // take care of right greater than x
            rightTail.next = head;
            // move pointer
            rightTail = rightTail.next;
        }

        // move head pointer
        head = head.next;
    }

    // combine two halves
    leftTail.next = rightList.next;
    // set right ending to null
    rightTail.next = null;

    // return .next since leftList itself is a dummy node
    return leftList.next;
}
