/**
 * solution 1
 * time: O(n^3)
 * space: O(n) -- Set size
 *
 * @param {number[]} digits
 * @return {number}
 */
function totalNumbers(digits) {
    let distinctNums = new Set();

    for (let i = 0; i < digits.length; i++) {
        // no leading zeros
        if (digits[i] === 0) {
            continue;
        }

        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || i === k || j === k) {
                    continue;
                }

                const currentNum = Number("" + digits[i] + digits[j] + digits[k]);

                if (currentNum % 2 === 0 && currentNum) {
                    // even num
                    distinctNums.add(currentNum);
                }
            }
        }
    }

    return distinctNums.size;
}

console.log(totalNumbers([1, 2, 3, 4])); // 12
console.log(totalNumbers([0, 2, 2])); // 2
console.log(totalNumbers([1, 3, 5])); // 0
