/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @return {number}
 */
function minimumFlips(n) {
    const binStr = n.toString(2);
    let left = 0;
    let right = binStr.length - 1;
    let counter = 0;

    // continue left until the end and
    // continue right until the beginning
    while (left < binStr.length && right >= 0) {
        const leftBit = binStr[left];
        const rightBit = binStr[right];

        if (leftBit !== rightBit) {
            counter++;
        }

        left++;
        right--;
    }

    return counter;
}

console.log(minimumFlips(7)); // 0
console.log(minimumFlips(10)); // 4
