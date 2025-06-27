"use strict";

class ArrayWrapper {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * time: O(n)
     * space: O(1)
     * 
     * @returns {number}
     */
    valueOf() {
        return this.nums.reduce((sum, currentValue) => sum + currentValue, 0);
    }

    /**
     * time: O(n)
     * space: O(n)
     * 
     * @returns {string}
     */
    toString() {
        return `[${this.nums}]`;
    }
}

const obj1 = new ArrayWrapper([1, 2]);
console.log(obj1);

const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1 + obj2); // 10
// String(obj1); // "[1,2]"
// String(obj2); // "[3,4]"
