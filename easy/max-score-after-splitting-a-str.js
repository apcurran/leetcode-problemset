"use strict";

// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {string} str
//  * @return {number}
//  */
// function maxScore(str) {
//     let maxSumScore = 0;

//     for (let i = 0; i < str.length - 1; i++) {
//         const leftSubStr = str.slice(0, i + 1);
//         const rightSubStr = str.slice(i + 1);

//         let leftSubStrZerosCount = 0;

//         for (let numStr of leftSubStr) {
//             if (numStr === "0") leftSubStrZerosCount++;
//         }

//         let rightSubStrOnesCount = 0;

//         for (let numStr of rightSubStr) {
//             if (numStr === "1") rightSubStrOnesCount++;
//         }
        
//         const sumScore = leftSubStrZerosCount + rightSubStrOnesCount;
//         maxSumScore = Math.max(maxSumScore, sumScore);
//     }

//     return maxSumScore;
// }

/**
 * solution 2 -- memory optimization
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function maxScore(str) {
    let maxSumScore = 0;

    for (let i = 0; i < str.length - 1; i++) {
        let leftSubStrZerosCount = 0;

        for (let j = 0; j <= i; j++) {
            if (str[j] === "0") leftSubStrZerosCount++;
        }

        let rightSubStrOnesCount = 0;

        for (let j = i + 1; j < str.length; j++) {
            if (str[j] === "1") rightSubStrOnesCount++;
        }
        
        const sumScore = leftSubStrZerosCount + rightSubStrOnesCount;
        maxSumScore = Math.max(maxSumScore, sumScore);
    }

    return maxSumScore;
}

console.log( maxScore("011101") ); // 5
console.log( maxScore("00") ); // 1
console.log( maxScore("0100") ); // 2
