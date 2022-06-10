"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// function sortArrayByParityII(nums) {
//     const evenNums = nums.filter((num) => num % 2 === 0);
//     const oddNums = nums.filter((num) => num % 2 !== 0);

//     let resArr = [];

//     nums.forEach((num, index) => {
//         if (index % 2 === 0) {
//             const evenNum = evenNums.pop();
//             resArr.push(evenNum);
//         } else {
//             const oddNum = oddNums.pop();
//             resArr.push(oddNum);
//         }
//     });

//     return resArr;
// }

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
    const evenNums = nums.filter((num) => num % 2 === 0);
    const oddNums = nums.filter((num) => num % 2 !== 0);

    let resArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            const evenNum = evenNums.pop();
            resArr.push(evenNum);
        } else {
            const oddNum = oddNums.pop();
            resArr.push(oddNum);
        }
    }

    return resArr;
}

console.log(sortArrayByParityII([4, 2, 5, 7])); // [4, 5, 2, 7]
