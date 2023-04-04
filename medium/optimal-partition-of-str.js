/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str
 * @return {number}
 */
function partitionString(str) {
    let subStrs = new Set();
    // will always have at least one char
    // need 1 as a default to account for the char
    // being added, but not incrementing minSubStrsCount (if only one char in str)
    let minSubStrsCount = 1;

    for (let char of str) {
        if (subStrs.has(char)) {
            // increment counter
            minSubStrsCount++;
            // reset cache
            subStrs.clear();
        }

        subStrs.add(char);
    }

    return minSubStrsCount;
}

console.log( partitionString("abacaba") ); // 4
