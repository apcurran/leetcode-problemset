"use strict";

// /**
//  * solution 1 -- backtracking (recursion)
//  * time: O(n * 2^n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// function subsets(nums) {
//     /** @type {[][]} */
//     let results = [];
//     let currentSubset = [];

//     function dfs(i) {
//         if (i >= nums.length) {
//             const subsetCopy = [...currentSubset];
//             results.push(subsetCopy);

//             return;
//         }

//         // decision to include current number
//         currentSubset.push(nums[i]);
//         // continue to next i value
//         dfs(i + 1);

//         // decision to exclude current number
//         currentSubset.pop();
//         dfs(i + 1);
//     }

//     dfs(0);

//     return results;
// }

/**
 * solution 2 -- cascading
 * time: O(n * 2^n)
 * space: O(n * 2^n)
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    let results = [[]];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let subsets = [];

        for (let current of results) {
            const temp = current.slice();
            temp.push(num);
            subsets.push(temp);
        }

        for (let current of subsets) {
            results.push(current);
        }
    }

    return results;
}

console.log( subsets([1,2,3]) ); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
