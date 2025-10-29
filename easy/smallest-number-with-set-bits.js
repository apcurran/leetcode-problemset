/**
 * solution 1 -- iterative
 * time: O(n * m)
 * space: O(m)
 *
 * @param {number} n
 * @return {number}
 */
function smallestNumber(n) {
    // smallest number >= n where all bits are 1s
    // must be power of 2 - 1
    const nBinary = n.toString(2);

    if (!nBinary.includes("0")) {
        return n;
    }

    let i = n + 1;

    while (true) {
        const iBinary = i.toString(2);

        if (!iBinary.includes("0")) {
            return i;
        }

        i++;
    }
}

console.log(smallestNumber(5)); // 7
console.log(smallestNumber(10)); // 15
console.log(smallestNumber(3)); // 3
