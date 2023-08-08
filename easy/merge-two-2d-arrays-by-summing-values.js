"use strict";

/**
 * solution 1
 * time: O(max(n, m) * log (max(n, m)))
 * space: O(max(n, m))
 * 
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
function mergeArrays(nums1, nums2) {
    let hashmap = new Map();

    for (let [id, value] of nums1) {
        hashmap.set(id, value);
    }

    for (let [id, value] of nums2) {
        const previousValue = hashmap.get(id) || 0;
        hashmap.set(id, value + previousValue);
    }

    let results = [];

    for (let tuple of hashmap) {
        results.push(tuple);
    }

    return results.sort((a, b) => a[0] - b[0]);
}

console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]));
// [[1,6],[2,3],[3,2],[4,6]]
