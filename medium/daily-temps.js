"use strict";

/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    let resArr = new Array(temperatures.length).fill(0);
    let stack = []; // pair [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];

        // is the stack empty AND is the temp greater than the temp at the top of the stack
        while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
            const stackIndex = stack.pop()[1];
            // subtract days
            resArr[stackIndex] = i - stackIndex;
        }

        stack.push([temp, i]);
    }

    return resArr;
}

console.log( dailyTemperatures([73,74,75,71,69,72,76,73]) ); // [1,1,4,2,1,1,0,0]
