"use strict";

/**
 * solution 1 -- counter simulation
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} logs
 * @return {number}
 */
function minOperations(logs) {
    let operationsCount = 0;

    for (let log of logs) {
        if (log === "../") {
            // never go back further than main dir -- 0 in this case
            operationsCount = Math.max(0, operationsCount - 1);
        } else if (!log.includes("./")) {
            // increase counter by 1
            operationsCount++;
        }
        // ignore "./" operations,
        // these stay in the current directory
    }

    return operationsCount;
}

console.log(minOperations(["d1/","d2/","../","d21/","./"])); // 2
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"])); // 3
