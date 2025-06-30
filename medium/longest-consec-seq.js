"use strict";

/**
 * solution 1 -- Set cache
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    let numsCache = new Set(nums);
    let longestSequence = 0;

    for (let num of nums) {
        const leftNeighbor = num - 1;

        // if there is not a left neighbor,
        // then we know that this is the start of a new sequence
        if (!numsCache.has(leftNeighbor)) {
            let currentSequenceLength = 0;

            // keep getting each consecutive number
            // if the cache has the next consecutive number,
            // then keep increasing the length of the sequence
            while (numsCache.has(num + currentSequenceLength)) {
                currentSequenceLength++;
            }

            longestSequence = Math.max(longestSequence, currentSequenceLength);
        }
    }

    return longestSequence;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
