"use strict";

// /**
//  * solution 1 -- stack
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// function dailyTemperatures(temperatures) {
//     let resArr = new Array(temperatures.length).fill(0);
//     let stack = [];

//     for (let i = 0; i < temperatures.length; i++) {
//         const temp = temperatures[i];
//         // is the stack empty AND is the temp greater than the temp at the top of the stack
//         while (stack.length > 0 && temp > temperatures[stack[stack.length - 1]]) {
//             const stackIndex = stack.pop();
//             // subtract days
//             resArr[stackIndex] = i - stackIndex;
//         }

//         stack.push(i);
//     }

//     return resArr;
// }

/**
 * solution 1 -- stack alt using tuple arrays [temp, index]
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    let results = new Array(temperatures.length).fill(0);
    let stack = []; // [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];

        while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
            const topOfStackIndex = (stack.pop())[1];
            const daysUntilTempIncreases = i - topOfStackIndex;
            results[topOfStackIndex] = daysUntilTempIncreases;
        }

        stack.push([temp, i]);
    }

    return results;
}

console.log( dailyTemperatures([73,74,75,71,69,72,76,73]) ); // [1,1,4,2,1,1,0,0]
