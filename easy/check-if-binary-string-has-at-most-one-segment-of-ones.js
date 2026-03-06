/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
function checkOnesSegment(s) {
    // contraints guarantee that the str starts with a "1"
    // any additional 1s segment needs a 0 then a 1 to start a new 1s segment
    // only really checking for "01" in the str
    for (let i = 0; i < s.length - 1; i++) {
        const curr = s[i];
        const next = s[i + 1];

        if (curr === "0" && next === "1") {
            return false;
        }
    }

    return true;
}

console.log(checkOnesSegment("1001")); // false
console.log(checkOnesSegment("110")); // true
