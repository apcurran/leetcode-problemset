"use strict";

/**
 * Solution 1
 *
 * Time: O(n log n) - due to sorting
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
    let sortedNumCache = new Map([...numCache.entries()].toSorted((a, b) => b[1] - a[1]));
    let n = arr.length;
    let currArrLen = arr.length;
    // Check cache to see the highest num of occurrences and start by removing that key num from arr.
    for (let key of sortedNumCache.keys()) {
        if (currArrLen <= n / 2) break;

        const numOccurences = sortedNumCache.get(key);
        currArrLen -= numOccurences;
        // After removing the num occurences from arr, incr a counter by 1.
        numSetRemovalCount++;
    }

    return numSetRemovalCount;
}

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); // 2
console.log(minSetSize([7, 7, 7, 7, 7, 7])); // 1
