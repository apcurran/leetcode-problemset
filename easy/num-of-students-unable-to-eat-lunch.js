"use strict";

// /**
//  * solution 1 -- stack
//  * time: O(n^2) - arr.shift() is O(n) due to moving all other vals after front is removed
//  * space: O(1)
//  *
//  * @param {number[]} students
//  * @param {number[]} sandwiches
//  * @return {number}
//  */
// function countStudents(students, sandwiches) {
//     let leaveToEndCount = 0;

//     while (sandwiches.length > 0) {
//         if (leaveToEndCount === students.length) break;

//         // check top of students stack and compare to top of sandwich stack
//         const studentsStackPeek = students[0];
//         const sandwichesStackPeek = sandwiches[0];

//         if (studentsStackPeek === sandwichesStackPeek) {
//             // if same, take fronts of both off their stacks
//             students.shift();
//             sandwiches.shift();
//             // reset counter
//             leaveToEndCount = 0;
//         } else {
//             const frontStudent = students.shift();
//             students.push(frontStudent);
//             // incr counter
//             leaveToEndCount++;
//         }
//     }

//     return students.length;
// }

/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(1) -- space will never surpass O(2), since only 1 and 0 can be counted
 *
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
    let results = students.length;
    let count = new Map();

    for (let student of students) {
        const previousCount = count.get(student) || 0;
        count.set(student, previousCount + 1);
    }

    for (let sandwich of sandwiches) {
        const currentCount = count.get(sandwich) || 0;

        if (currentCount > 0) {
            results--;
            count.set(sandwich, currentCount - 1);
        } else {
            break;
        }
    }

    return results;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
