// /**
//  * solution 1 -- iterative
//  * time: O(n * m)
//  * space: O(m)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function smallestNumber(n) {
//     // smallest number >= n where all bits are 1s
//     // must be power of 2 - 1
//     const nBinary = n.toString(2);

//     if (!nBinary.includes("0")) {
//         return n;
//     }

//     let i = n + 1;

//     while (true) {
//         const iBinary = i.toString(2);

//         if (!iBinary.includes("0")) {
//             return i;
//         }

//         i++;
//     }
// }

// /**
//  * solution 2 -- pattern approach
//  * time: O(log n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function smallestNumber(n) {
//     let x = 1;

//     while (x < n) {
//         x = x * 2 + 1;
//     }

//     return x;
// }

/**
 * solution 3 -- bitwise operators
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function smallestNumber(n) {
    let result = 1;

    while (result < n) {
        // move 1 bit over (bitwise left shift),
        // then set all right bits to 1 with bitwise OR
        result = (result << 1) | 1;
    }

    return result;
}

console.log(smallestNumber(5)); // 7
console.log(smallestNumber(10)); // 15
console.log(smallestNumber(3)); // 3
