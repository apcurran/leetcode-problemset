/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function firstMatchingIndex(s) {
    let matchingIndex = -1;
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer <= rightPointer) {
        const leftChar = s[leftPointer];
        const rightChar = s[rightPointer];

        if (leftChar === rightChar) {
            matchingIndex = leftPointer;

            break;
        }

        leftPointer++;
        rightPointer--;
    }

    return matchingIndex;
}

console.log(firstMatchingIndex("abcacbd")); // 1
console.log(firstMatchingIndex("abc")); // 1
console.log(firstMatchingIndex("abcdab")); // -1
