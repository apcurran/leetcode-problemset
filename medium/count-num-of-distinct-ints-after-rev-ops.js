"use strict";

/**
 * solution 1
 * n = nums length
 * m = num digits length
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function countDistinctIntegers(nums) {
    let distinctNums = new Set(nums);

    for (let num of nums) {
        const reversedNum = Number(String(num)
                                .split("")
                                .reverse()
                                .join(""));
        distinctNums.add(reversedNum);
    }

    return distinctNums.size;
}

console.log( countDistinctIntegers([1,13,10,12,31]) ); // 6
console.log( countDistinctIntegers([2,2,2]) ); // 1
