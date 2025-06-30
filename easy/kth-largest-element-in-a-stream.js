"use strict";

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // add value to nums array
        this.nums.push(val);
        // sort highest to lowest
        this.nums.sort(function sortDesc(a, b) {
            return b - a;
        });
        // return kth largest
        return this.nums[this.k - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
const myObj = new KthLargest(3, [4, 5, 8, 2]); // init obj
console.log(myObj.add(3)); // 4
console.log(myObj.add(5)); // 5
console.log(myObj.add(10)); // 5
console.log(myObj.add(9)); // 8
console.log(myObj.add(4)); // 8
