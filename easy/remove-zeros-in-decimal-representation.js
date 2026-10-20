// /**
//  * solution 1 -- convert types
//  * time: O(d)
//  * space: O(d)
//  *
//  * @param {number} n
//  * @return {number}
//  */
// function removeZeros(n) {
//     const strN = String(n);
//     let result = "";

//     for (let strDigit of strN) {
//         if (strDigit === "0") continue;

//         result += strDigit;
//     }

//     return Number(result);
// }

/**
 * solution 2 -- math
 * time: O(d)
 * space: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function removeZeros(n) {
    let result = 0;
    let place = 1;

    while (n > 0) {
        const digit = n % 10; // remainder
        n = Math.floor(n / 10); // move over one place

        if (digit === 0) {
            continue;
        }

        result += digit * place;
        place *= 10;
    }

    return result;
}

console.log(removeZeros(1020030)); // 123
console.log(removeZeros(1)); // 1
