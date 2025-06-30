"use strict";

class NumArray {
    /**
     * time: O(n)
     * space: O(n)
     *
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];

        let currentValue = 0;

        for (let num of nums) {
            currentValue += num;
            this.prefix.push(currentValue);
        }
    }

    /**
     * solution 1 -- prefix sums are pre-computed in constructor
     * time: O(1)
     * space: O(1)
     *
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const rightSum = this.prefix[right];
        const leftSum = this.prefix[left - 1] || 0;

        return rightSum - leftSum;
    }
}

// Your NumArray object will be instantiated and called as such:
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
