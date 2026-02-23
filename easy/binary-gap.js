/**
 * solution 1 -- nested loops (brute force)
 * time: O(n^2)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function binaryGap(n) {
    const binaryNum = n.toString(2);
    let largestGap = 0;

    for (let i = 0; i < binaryNum.length; i++) {
        if (binaryNum[i] !== "1") {
            continue;
        }

        for (let j = i + 1; j < binaryNum.length; j++) {
            if (binaryNum[j] === "1") {
                // take window size of prev 1 and curr 1 (Math.max() the counter)
                const windowSize = j - i;
                largestGap = Math.max(largestGap, windowSize);

                break;
            }
        }
    }

    return largestGap;
}

console.log(binaryGap(22)); // 2
console.log(binaryGap(8)); // 0
console.log(binaryGap(5)); // 2
