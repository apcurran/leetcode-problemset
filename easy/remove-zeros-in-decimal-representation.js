/**
 * solution 1 -- convert types
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function removeZeros(n) {
    const strN = String(n);
    let result = "";

    for (let strDigit of strN) {
        if (strDigit === "0") continue;

        result += strDigit;
    }

    return Number(result);
}

console.log(removeZeros(1020030)); // 123
console.log(removeZeros(1)); // 1
