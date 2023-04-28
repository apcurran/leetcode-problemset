"use strict";

/**
 * solution 1
 * time: O((m * n) + (n * log n))
 * space: O(m)
 * 
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
function answerQueries(nums, queries) {
    nums.sort((a, b) => a - b);

    let longestSubsequences = [];

    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        let query = queries[i];

        for (let num of nums) {
            if (query < num) break;
            
            count++;
            query -= num;
        }

        longestSubsequences.push(count);
    }

    return longestSubsequences;
}

console.log( answerQueries([4,5,2,1], [3,10,21]) ); // [2, 3, 4]
