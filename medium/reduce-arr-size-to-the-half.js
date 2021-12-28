"use strict";

/**
 * Solution 1
 * 
 * Time: O(n^2)
 * Space: O(n)
 * 
 * You are given an integer array arr.
 * You can choose a set of integers and remove all the occurrences of these integers in the array.
 * Return the minimum size of the set so that at least half of the integers of the array are removed.
 * 
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
    let arrCopy = [...arr];
    let numCache = new Map();
    let numSetRemovalCount = 0;

    for (let num of arr) {
        if (!numCache.has(num)) {
            numCache.set(num, 1);
        } else {
            const numCount = numCache.get(num);
            numCache.set(num, numCount + 1);
        }
    }

    // Sorted numCache by value (number of occurrences)
    let sortedNumCache = new Map([...numCache.entries()].sort((a, b) => b[1] - a[1]));

    // Check cache to see the highest num of occurrences and start by removing that key num from arr.
    for (let key of sortedNumCache.keys()) {
        if (arrCopy.length <= arr.length / 2) break;

        // Remove num key from arr
        arrCopy = arrCopy.filter((num) => num !== key);
        // After removing the num occurences from arr, incr a counter by 1.
        numSetRemovalCount++;
    }

    return numSetRemovalCount;
}

console.log( minSetSize([3,3,3,3,5,5,5,2,2,7]) ); // 2
console.log( minSetSize([7,7,7,7,7,7]) ); // 1
