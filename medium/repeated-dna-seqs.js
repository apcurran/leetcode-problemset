"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
    let seenSet = new Set();
    let repeatedSeqsSet = new Set();

    for (let i = 0; i < s.length - 9; i++) {
        const strPiece = s.slice(i, i + 10);
        
        if (seenSet.has(strPiece)) {
            repeatedSeqsSet.add(strPiece);
        } else {
            seenSet.add(strPiece);
        }
    }

    return [...repeatedSeqsSet];
}

console.log( findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT") ); // ["AAAAACCCCC", "CCCCCAAAAA"]
