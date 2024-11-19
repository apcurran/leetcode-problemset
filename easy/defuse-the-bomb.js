"use strict";

/**
 * solution 1
 * time: O(n * k)
 * space: O(n) -- including results arr
 * 
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
function decrypt(code, k) {
    const n = code.length;
    let results = new Array(n).fill(0);

    if (k === 0) return results;

    for (let i = 0; i < n; i++) {
        if (k > 0) {
            for (let j = i + 1; j < i + 1 + k; j++) {
                results[i] += code[j % n];
            }
        } else {
            for (let j = i - 1; j > i - 1 - Math.abs(k); j--) {
                results[i] += code[j % n];
            }
        }
    }

    return results;
}

console.log(decrypt([5,7,1,4], 3)); // [12,10,16,13]
