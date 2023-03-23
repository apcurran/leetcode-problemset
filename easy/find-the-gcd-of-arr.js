"use strict";

/**
 * solution 1 -- Euclidean Algorithm
 * time: O(n + log(b))
 * space: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
function findGCD(nums) {
    let [smallestNum, largestNum] = getSmallestAndLargestNums(nums);

    while (largestNum !== 0) {
        const temp = largestNum;
        largestNum = smallestNum % largestNum;
        smallestNum = temp;
    }

    return smallestNum;
}

/**
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function getSmallestAndLargestNums(arr) {
    let smallestNum = Infinity;
    let largestNum = -Infinity;

    for (let num of arr) {
        if (num < smallestNum) {
            smallestNum = num;
        }

        if (num > largestNum) {
            largestNum = num;
        }
    }

    return [smallestNum, largestNum];
}

console.log( findGCD([2,5,6,9,10]) ); // 2
console.log( findGCD([7,5,6,8,3]) ); // 1
