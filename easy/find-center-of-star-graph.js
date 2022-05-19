"use strict";

/**
 * solution 1
 * m = len of first nested arr
 * time: O(m^2)
 * space: O(1)
 * 
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
    const firstArr = edges[0];
    const secondArr = edges[1];
    
    for (let i = 0; i < firstArr.length; i++) {
        const currFirstArrNum = firstArr[i];

        if (secondArr.includes(currFirstArrNum)) return currFirstArrNum;
    }
    
    return -1;
}

console.log( findCenter([[1, 2], [2, 3], [4, 2]]) ); // 2
console.log( findCenter([[1, 2], [5, 1], [1, 3], [1, 4]]) ); // 1
