// /**
//  * solution 1 -- string methods
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function mirrorDistance(n) {
//     const nReversed = Number(String(n).split("").reverse().join(""));

//     return Math.abs(n - nReversed);
// }

/**
 * solution 2 -- math
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function mirrorDistance(n) {
    let nCopy = n;
    let nReversed = 0;

    while (nCopy > 0) {
        const lastDigit = nCopy % 10;
        // shift and add (move over left)
        nReversed = nReversed * 10 + lastDigit;
        // drop last digit
        nCopy = Math.floor(nCopy / 10);
    }

    return Math.abs(n - nReversed);
}

console.log(mirrorDistance(25)); // 27
console.log(mirrorDistance(10)); // 9
