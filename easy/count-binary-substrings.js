/**
 * solution 1 -- groupings
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {number}
 */
function countBinarySubstrings(str) {
    let groups = Array.from({ length: str.length });
    groups[0] = 1;
    let blockPointer = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] !== str[i]) {
            blockPointer++; // move pointer first
            groups[blockPointer] = 1; // initialize new group count to 1
        } else {
            groups[blockPointer]++; // increment current group count
        }
    }

    let counter = 0;

    for (let i = 1; i <= blockPointer; i++) {
        const smallerGroupCount = Math.min(groups[i - 1], groups[i]);
        counter += smallerGroupCount;
    }

    return counter;
}

console.log(countBinarySubstrings("00110011")); // 6
console.log(countBinarySubstrings("10101")); // 4
