/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {string}
 */
function reverseByType(s) {
    let letters = [];
    let specialChars = [];

    for (let c of s) {
        if (isLetter(c)) {
            letters.push(c);
        } else {
            specialChars.push(c);
        }
    }

    let results = [];

    for (let i = 0; i < s.length; i++) {
        if (isLetter(s[i])) {
            results[i] = letters.pop();
        } else {
            results[i] = specialChars.pop();
        }
    }

    return results.join("");
}

console.log(reverseByType(")ebc#da@f(")); // "(fad@cb#e)"

/**
 * @param {string} char
 * @returns {boolean}
 */
function isLetter(char) {
    return char >= "a" && char <= "z";
}
