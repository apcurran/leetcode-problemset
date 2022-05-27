"use strict";

/**
 * solution 1 -- cache
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
    // cache num frequencies
    let numFreqs = new Map();

    for (let num of nums) {
        const prevFreq = numFreqs.get(num) || 0;
        numFreqs.set(num, prevFreq + 1);
    }

    return nums.sort((a, b) => {
        // check for num freq and compare with prev num freq
        const aFreq = numFreqs.get(a);
        const bFreq = numFreqs.get(b);
        const freqsDiff = aFreq - bFreq;
        
        // sort in incr freq
        // only if freqs diff is not falsy
        if (freqsDiff !== 0) return freqsDiff;
        
        // if mult vals have same freq sort in decr order
        return b - a;
    });
}

// console.log( frequencySort([1, 1, 2, 2, 2, 3]) ); // [3,1,1,2,2,2]
console.log( frequencySort([2, 3, 1, 3, 2]) ); // [1,3,3,2,2]
