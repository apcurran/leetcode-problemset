"use strict";

/**
 * solution 1 -- stack
 * time: O(n^2) - arr.shift() is O(n) due to moving all other vals after front is removed
 * space: O(1)
 * 
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
    let leaveToEndCount = 0;

    while (sandwiches.length > 0) {
        if (leaveToEndCount === students.length) break;

        // check top of students stack and compare to top of sandwich stack
        const studentsStackPeek = students[0];
        const sandwichesStackPeek = sandwiches[0];

        if (studentsStackPeek === sandwichesStackPeek) {
            // if same, take fronts of both off their stacks
            students.shift();
            sandwiches.shift();
            // reset counter
            leaveToEndCount = 0;
        } else {
            const frontStudent = students.shift();
            students.push(frontStudent);
            // incr counter
            leaveToEndCount++;
        }
    }

    return students.length;
}

console.log( countStudents([1,1,0,0], [0,1,0,1]) ); // 0
console.log( countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]) ); // 3
