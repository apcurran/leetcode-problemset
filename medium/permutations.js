"use strict";

/**
 * Solution 1
 * time: O(n!)
 * space: O(n!)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    let resArr = [];
    
    /**
     * @param {number} n 
     * @param {number[]} heapArr 
     * @returns {void}
     */
    function generate(n, heapArr) {
        if (n === 1) {
            resArr.push([...heapArr]);
    
            return;
        }
    
        generate(n - 1, heapArr);
    
        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                swapInPlace(heapArr, i, n - 1);
            } else {
                swapInPlace(heapArr, 0, n - 1);
            }

            generate(n - 1, heapArr);
        }
    }

    generate(nums.length, [...nums]);

    return resArr;
}

console.log( permute([1, 2, 3]) );
// [
//     [1,2,3],
//     [1,3,2],
//     [2,1,3],
//     [2,3,1],
//     [3,1,2],
//     [3,2,1]
// ]

/**
 * @param {number[]} arrToSwap 
 * @param {number} indexA 
 * @param {number} indexB
 * @returns {void}
 */
function swapInPlace(arrToSwap, indexA, indexB) {
    [arrToSwap[indexA], arrToSwap[indexB]] = [arrToSwap[indexB], arrToSwap[indexA]];
}