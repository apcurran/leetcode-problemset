"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(1)
 *
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
function minMovesToSeat(seats, students) {
    // sort input arrs
    seats.sort(sortAsc);
    students.sort(sortAsc);

    let totalMoves = 0;

    for (let i = 0; i < students.length; i++) {
        const currStudentPos = students[i];
        const currProspectiveSeatPos = seats[i];
        const studentMoveAmt = Math.abs(
            currStudentPos - currProspectiveSeatPos,
        );
        totalMoves += studentMoveAmt;
    }

    return totalMoves;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sortAsc(a, b) {
    return a - b;
}

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 4
