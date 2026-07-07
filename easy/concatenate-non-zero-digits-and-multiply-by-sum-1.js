/**
 * solution 1 -- direct simulation
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function sumAndMultiply(n) {
    const nStr = String(n);
    // x = all non-zero digits concat
    let xStr = "";

    for (let i = 0; i < nStr.length; i++) {
        const currentDigitStr = nStr[i];

        if (currentDigitStr === "0") {
            continue;
        }

        xStr += currentDigitStr;
    }

    const x = Number(xStr);
    // sum = sum of digits in x
    let sum = 0;

    for (let digitStr of xStr) {
        sum += Number(digitStr);
    }

    return x * sum;
}

console.log(sumAndMultiply(10203004)); // 12340
