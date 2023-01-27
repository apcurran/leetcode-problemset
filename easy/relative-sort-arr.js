"use strict";

/**
 * solution 1
 * n = arr1 length
 * m = arr2 length
 * time: O(n * log n + m)
 * space: O(n)
 * 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    // cache nums and frequencies of arr1 in a Map
    let arr1NumbersCache = new Map();
    // create a new arr1
    let results = [];

    for (let num of arr1) {
        const previousFrequency = arr1NumbersCache.get(num) || 0;
        arr1NumbersCache.set(num, previousFrequency + 1);
    }

    // sort arr1Map in ascending order
    const sortedArr1NumbersCache = new Map([...arr1NumbersCache.entries()].sort((entryA, entryB) => entryA[0] - entryB[0]));
    
    // iterate arr2
    for (let num of arr2) {
        // add num to results based on num's frequency
        const arr1NumberFrequency = sortedArr1NumbersCache.get(num);
        
        for (let i = 0; i < arr1NumberFrequency; i++) {
            results.push(num);
        }

        // remove num from cache
        sortedArr1NumbersCache.delete(num);
    }

    // after completing arr2 iteration, check for leftover vals in arr1Map
    for (let [num, numFrequency] of sortedArr1NumbersCache) {
        // add these leftovers to resArr in ascending order
        // add num to results based on num's frequency
        for (let i = 0; i < numFrequency; i++) {
            results.push(num);
        }
    }

    return results;
}

console.log( relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]) ); // [2,2,2,1,4,3,3,9,6,7,19]
console.log( relativeSortArray([28,6,22,8,44,17], [22,28,8,6]) ); // [22,28,8,6,17,44]
