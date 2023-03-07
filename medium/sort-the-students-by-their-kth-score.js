"use strict";

/**
 * solution 1
 * n = number of student rows
 * time: O(n * log n)
 * space: O(1)
 * 
 * @param {number[][]} scores
 * @param {number} kColumn
 * @return {number[][]}
 */
function sortTheStudents(scores, kColumn) {
    return scores.sort((student1, student2) => {
        const student1ExamScore = student1[kColumn];
        const student2ExamScore = student2[kColumn];
        
        return student2ExamScore - student1ExamScore;
    });
}

console.log( sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2) );
// [[7,5,11,2],[10,6,9,1],[4,8,3,15]]

console.log( sortTheStudents([[3,4],[5,6]], 0) );
// [[5,6],[3,4]]
