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
    let minSubStrsCount = 1;

    for (let char of str) {
        if (subStrs.has(char)) {
            // increment counter
            minSubStrsCount++;
            // reset cache
            subStrs = new Set();
        }

        subStrs.add(char);
    }

    return minSubStrsCount;
}

console.log( partitionString("abacaba") ); // 4
