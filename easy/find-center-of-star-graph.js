"use strict";

// /**
//  * solution 1
//  * m = len of first nested arr
//  * time: O(m^2)
//  * space: O(1)
//  *
//  * @param {number[][]} edges
//  * @return {number}
//  */
// function findCenter(edges) {
//     const firstEdge = edges[0];
//     const secondEdge = edges[1];

//     for (let i = 0; i < firstEdge.length; i++) {
//         const currFirstArrNum = firstEdge[i];

//         if (secondEdge.includes(currFirstArrNum)) return currFirstArrNum;
//     }

//     return -1;
// }

/**
 * solution 2
 * time: O(1)
 * space: O(1)
 *
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
    const firstEdge = edges[0];
    const secondEdge = edges[1];

    if (secondEdge.includes(firstEdge[0])) {
        return firstEdge[0];
    } else {
        return firstEdge[1];
    }
}

console.log(
    findCenter([
        [1, 2],
        [2, 3],
        [4, 2],
    ]),
); // 2
console.log(
    findCenter([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
    ]),
); // 1
