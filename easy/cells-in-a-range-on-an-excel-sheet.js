"use strict";

/**
 * solution 1
 * n = columns
 * m = rows
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {string} range
 * @return {string[]}
 */
function cellsInRange(range) {
    const [startColumn, startRow, , endColumn, endRow] = range;
    const startColumnCharCode = startColumn.charCodeAt(0);
    const endColumnCharCode = endColumn.charCodeAt(0);
    const startRowNum = Number(startRow);
    const endRowNum = Number(endRow);
    let rangeCells = [];

    for (let i = startColumnCharCode; i <= endColumnCharCode; i++) {
        const currentLetter = String.fromCharCode(i);

        for (let j = startRowNum; j <= endRowNum; j++) {
            rangeCells.push(currentLetter + j);
        }
    }

    return rangeCells;
}

console.log( cellsInRange("K1:L2") ); // ["K1","K2","L1","L2"]
