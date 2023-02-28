"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
function numOfSubarrays(arr, k, threshold) {
    let subArraysCount = 0;
    
    for (let i = 0; i < arr.length - k + 1; i++) {
        const currentNum = arr[i];
        let sum = currentNum;

        for (let j = i + 1; j < i + k; j++) {
            const innerNum = arr[j];
            sum += innerNum;
        }

        const avg = sum / k;

        if (avg >= threshold) subArraysCount++;
    }

    return subArraysCount;
}

console.log( numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4) ); // 3
console.log( numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5) ); // 6
