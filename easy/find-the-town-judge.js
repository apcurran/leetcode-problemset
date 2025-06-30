"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(n)
 *
 * @param {number} totalPeople
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(totalPeople, trust) {
    let trusted = new Array(totalPeople + 1).fill(0);

    for (let [source, destination] of trust) {
        trusted[source]--;
        trusted[destination]++;
    }

    for (let i = 1; i < trusted.length; i++) {
        // n - 1 edges going into the town judge
        // since everyone, except the judge (who trusts nobody),
        // trusts the judge
        if (totalPeople - 1 === trusted[i]) {
            // identified judge
            return i;
        }
    }

    // no judge found
    return -1;
}

console.log(findJudge(2, [[1, 2]])); // 2
console.log(
    findJudge(3, [
        [1, 3],
        [2, 3],
    ]),
); // 3
console.log(
    findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
    ]),
); // -1
console.log(
    findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
    ]),
); // 3
