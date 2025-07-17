"use strict";

// /**
//  * solution 1 -- correct, but TLE
//  * n = players
//  * m = trainers
//  * time: O(n * m)
//  * space: O(n + m) -- sorting both arrays
//  *
//  * @param {number[]} players
//  * @param {number[]} trainers
//  * @return {number}
//  */
// function matchPlayersAndTrainers(players, trainers) {
//     players.sort(sortAsc);
//     trainers.sort(sortAsc);
//     let counter = 0;

//     for (let player of players) {
//         // iterate trainers arr
//         for (let j = 0; j < trainers.length; j++) {
//             const trainer = trainers[j];

//             if (player <= trainer) {
//                 counter++;
//                 // zero out current trainer value
//                 trainers[j] = 0;
//                 // exit early
//                 break;
//             }
//         }
//     }

//     return counter;
// }

/**
 * solution 2 -- sort, then two pointers
 * n = players
 * m = trainers
 * time: O(n * log n + m * log m)
 * space: O(n + m) -- sorting both arrays
 *
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
function matchPlayersAndTrainers(players, trainers) {
    players.sort(sortAsc);
    trainers.sort(sortAsc);
    let matchesCount = 0;

    for (
        let pIndex = 0, tIndex = 0;
        pIndex < players.length && tIndex < trainers.length;
        pIndex++, tIndex++
    ) {
        while (tIndex < trainers.length && players[pIndex] > trainers[tIndex]) {
            tIndex++;
        }

        if (tIndex < trainers.length) {
            matchesCount++;
        }
    }

    return matchesCount;
}

console.log(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8])); // 2
console.log(matchPlayersAndTrainers([1, 1, 1], [10])); // 1

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sortAsc(a, b) {
    return a - b;
}
