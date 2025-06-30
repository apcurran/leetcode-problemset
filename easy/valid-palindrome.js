/**
 * solution 1 -- two-pointer technique
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const NUMBER_CHARCODE_START = 48;
    const NUMBER_CHARCODE_END = 57;
    const ALPHA_LOWER_CHARCODE_START = 97;
    const ALPHA_LOWER_CHARCODE_END = 122;
    let alphaNumericStr = "";

    for (let char of str) {
        // check if alphanumeric first
        const lowerChar = char.toLowerCase();
        const charCode = lowerChar.charCodeAt(0);

        if (
            charCode < NUMBER_CHARCODE_START ||
            (charCode > NUMBER_CHARCODE_END &&
                charCode < ALPHA_LOWER_CHARCODE_START) ||
            charCode > ALPHA_LOWER_CHARCODE_END
        ) {
            // skip element
            continue;
        }

        alphaNumericStr += lowerChar;
    }

    return isStringPalindrome(alphaNumericStr);
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function isStringPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        const leftChar = str[left];
        const rightChar = str[right];

        if (leftChar !== rightChar) return false;

        // move pointers
        left++;
        right--;
    }

    return true;
}
