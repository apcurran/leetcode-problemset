// /**
//  * solution 1 -- string conversion of num
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @return {boolean}
//  */
// function checkGoodInteger(n) {
//     const strN = String(n);
//     let digitSum = 0;
//     let squareSum = 0;

//     for (let strDigit of strN) {
//         const digit = Number(strDigit);
//         digitSum += digit;
//         squareSum += digit * digit;
//     }

//     return squareSum - digitSum >= 50;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 *
 * @param {number} n
 * @return {boolean}
 */
function checkGoodInteger(n) {
    let digitSum = 0;
    let squareSum = 0;

    while (n > 0) {
        const digit = n % 10;
        digitSum += digit;
        squareSum += digit * digit;

        n = Math.floor(n / 10);
    }

    return squareSum - digitSum >= 50;
}

console.log(checkGoodInteger(1000)); // false
console.log(checkGoodInteger(19)); // true
