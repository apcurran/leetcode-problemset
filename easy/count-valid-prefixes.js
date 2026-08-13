/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} binStr
 * @return {number}
 */
function countValidPrefixes(binStr) {
    let zerosCount = 0;
    let onesCount = 0;
    let validPrefixesCount = 0;

    for (let binDigitStr of binStr) {
        if (binDigitStr === "0") {
            zerosCount++;
        } else {
            onesCount++;
        }

        const absDiff = Math.abs(zerosCount - onesCount);

        // a diff of 1 or 0 is enouch to have alternating digits
        if (absDiff <= 1) {
            validPrefixesCount++;
        }
    }

    return validPrefixesCount;
}

console.log(countValidPrefixes("00101")); // 3
console.log(countValidPrefixes("101")); // 3
