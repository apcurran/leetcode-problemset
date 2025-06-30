"use strict";

// /**
//  * solution 1
//  * n = nums length
//  * m = num digits length
//  * time: O(n * m)
//  * space: O(n)
//  *
//  * @param {number[]} nums
//  * @return {number}
//  */
// function countDistinctIntegers(nums) {
//     let distinctNums = new Set(nums);

//     for (let num of nums) {
//         const reversedNum = Number(String(num)
//                                 .split("")
//                                 .reverse()
//                                 .join(""));
//         distinctNums.add(reversedNum);
//     }

//     return distinctNums.size;
// }

/**
 * solution 2 -- slight optimizations with reverse loop (cut out several other loops)
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
        const strNum = String(num);
        let reversedStrNum = "";

        for (let i = strNum.length - 1; i >= 0; i--) {
            reversedStrNum += strNum[i];
        }

        distinctNums.add(Number(reversedStrNum));
    }

    return distinctNums.size;
}

console.log(countDistinctIntegers([1, 13, 10, 12, 31])); // 6
console.log(countDistinctIntegers([2, 2, 2])); // 1
