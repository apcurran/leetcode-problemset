"use strict";

/**
 * Time: O(n^2)
 * 
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
function countPoints(points, queries) {
    let pointCountArr = [];

    for (let [xj, yj, radj] of queries) {
        let pointCount = 0;

        for (let [xi, yi] of points) {
            const xVal = xi - xj;
            const yVal = yi - yj;
            if (xVal ** 2 + yVal ** 2 <= radj ** 2) {
                pointCount++;
            }
            
        }
        pointCountArr.push(pointCount);
    }

    return pointCountArr;
}

console.log( countPoints([[1,3],[3,3],[5,3],[2,2]], [[2,3,1],[4,3,1],[1,1,2]]) ); // [3, 2, 2]
console.log( countPoints([[1,1],[2,2],[3,3],[4,4],[5,5]], [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]) ); // [2,3,2,4]
