/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} bits
 * @return {boolean}
 */
function isOneBitCharacter(bits) {
    let i = 0;

    while (i < bits.length - 1) {
        if (bits[i] === 0) {
            i++;
        } else {
            i += 2;
        }
    }

    return i === bits.length - 1;
}

console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
