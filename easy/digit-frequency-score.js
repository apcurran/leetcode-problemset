// /**
//  * solution 1 -- hash map
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function digitFrequencyScore(n) {
//     const nStr = String(n);
//     let digitsFrequencies = new Map();

//     for (let digitStr of nStr) {
//         const digit = Number(digitStr);
//         const previousCount = digitsFrequencies.get(digit) || 0;
//         digitsFrequencies.set(digit, previousCount + 1);
//     }

//     let sum = 0;

//     for (let [digit, digitCount] of digitsFrequencies) {
//         const digitProduct = digit * digitCount;
//         sum += digitProduct;
//     }

//     return sum;
// }

/**
 * solution 2 -- math
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function digitFrequencyScore(n) {
    let sum = 0;

    for (let digitStr of String(n)) {
        sum += Number(digitStr);
    }

    return sum;
}

console.log(digitFrequencyScore(122)); // 5
console.log(digitFrequencyScore(101)); // 2
