// /**
//  * solution 1
//  * time: O(n * log n)
//  * space: O(1)
//  *
//  * @param {number} n
//  * @return {number[]}
//  */
// function getNoZeroIntegers(n) {
//     for (let a = 1; a <= n; a++) {
//         const b = n - a;

//         if (checkNoZeros(a) && checkNoZeros(b)) {
//             return [a, b];
//         }
//     }

//     return [-1, -1];
// }

// /**
//  * @param {number} n
//  * @returns {boolean}
//  */
// function checkNoZeros(n) {
//     while (n > 0) {
//         const digit = n % 10;

//         if (digit === 0) return false;

//         n = Math.floor(n / 10);
//     }

//     return true;
// }

/**
 * solution 2
 * time: O(n * log n)
 * space: O(maxlen(a, b)) -- string conversion space
 *
 * @param {number} n
 * @return {number[]}
 */
function getNoZeroIntegers(n) {
    for (let a = 1; a <= n; a++) {
        const b = n - a;

        if (!String(a).includes("0") && !String(b).includes("0")) {
            return [a, b];
        }
    }

    return [-1, -1];
}

console.log(getNoZeroIntegers(11)); // [2, 9]
