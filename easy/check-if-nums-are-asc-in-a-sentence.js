"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
function areNumbersAscending(s) {
    const nums = s.split(" ").reduce((accumulator, value) => {
        if (!Number.isNaN(Number(value))) {
            accumulator.push(Number(value));

            return accumulator;
        } else {
            return accumulator;
        }
    }, []);

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const nextNum = nums[i + 1];

        if (nextNum - currentNum <= 0) {
            return false;
        }
    }

    return true;
}

// /**
//  * solution 2
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @return {boolean}
//  */
// function areNumbersAscending(s) {
//     const nums = s.match(/\d{1,2}/g);

//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         const nextNum = nums[i + 1];

//         if (nextNum - currentNum <= 0) {
//             return false;
//         }
//     }

//     return true;
// }

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true
console.log(areNumbersAscending("hello world 5 x 5")); // false
console.log(
    areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"),
); // false
