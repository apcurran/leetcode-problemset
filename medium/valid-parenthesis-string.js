/**
 * solution 1 -- stack
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
    let openParens = [];
    let asterisks = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (currentChar === "(") {
            openParens.push(i);
        } else if (currentChar === "*") {
            asterisks.push(i);
        } else {
            // if more open parens available on stack, use to balance out closing paren
            if (openParens.length > 0) {
                openParens.pop();
            } else if (asterisks.length > 0) {
                asterisks.pop();
            } else {
                // all out and cannot be valid
                return false;
            }
        }
    }

    while (openParens.length > 0 && asterisks.length > 0) {
        // if an open paren exists (checking index) after an asterisk, it cannot be balanced
        if (openParens.pop() > asterisks.pop()) {
            return false;
        }
    }

    return openParens.length === 0;
}

console.log(checkValidString("(*)")); // true
console.log(checkValidString("(*))")); // true
console.log(checkValidString("(")); // false
