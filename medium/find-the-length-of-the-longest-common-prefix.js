"use strict";

/**
 * solution 1 -- hashset
 * time: O(n * m)
 * space: O(n + d)
 * 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
function longestCommonPrefix(arr1, arr2) {
    const smallerArr = arr1.length <= arr2.length ? arr1 : arr2;
    const largerArr = arr1.length > arr2.length ? arr1 : arr2;
    let prefixSet = new Set();

    for (let num of smallerArr) {
        while (num && !prefixSet.has(num)) {
            prefixSet.add(num);
            num = Math.floor(num / 10);
        }
    }

    let result = 0;

    for (let num of largerArr) {
        while (num && !prefixSet.has(num)) {
            num = Math.floor(num / 10);
        }

        if (num !== 0) {
            result = Math.max(result, String(num).length);
        }
    }

    return result;
}

console.log(longestCommonPrefix([1,10,100], [1000])); // 3
