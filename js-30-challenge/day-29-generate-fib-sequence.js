"use strict";

// /**
//  * solution 1
//  * time: O(1)
//  * space: O(1)
//  *
//  * @return {Generator<number>}
//  */
// function* fibGenerator() {
//     let a = 0;
//     let b = 1;

//     while (true) {
//         yield a;

//         const temp = a;
//         a = b;
//         b += temp;
//     }
// }

/**
 * solution 2
 * time: O(n)
 * space: O(n)
 *
 * @return {Generator<number>}
 */
function fibGenerator() {
    const SEQUENCE_LENGTH = 50;
    let fibSequence = Array(SEQUENCE_LENGTH).fill(0);
    // first elem is 0
    // second elem is 1
    // in fibonacci seq
    fibSequence[1] = 1;

    for (let i = 2; i < fibSequence.length; i++) {
        const firstPrevious = fibSequence[i - 1];
        const secondPrevious = fibSequence[i - 2];
        const currentFib = firstPrevious + secondPrevious;
        fibSequence[i] = currentFib;
    }

    return fibSequence[Symbol.iterator]();
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
