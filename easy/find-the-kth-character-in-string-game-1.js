/**
 * solution 1 -- simulation
 * time: O(log n * m)
 * space: O(n + m)
 *
 * @param {number} k
 * @return {string} char
 */
function kthCharacter(k) {
    let word = "a";

    // while str length is < k, keep going
    while (word.length < k) {
        // generate new str by changing each char in word to next char in alphabet
        let newStr = "";

        for (let char of word) {
            const nextCharCode = char.charCodeAt(0) + 1;
            const nextChar = String.fromCharCode(nextCharCode);
            newStr += nextChar;
        }
        // then append to original word
        word += newStr;
    }
    // return kth char in word

    return word[k - 1];
}

console.log(kthCharacter(5)); // "b"
console.log(kthCharacter(10)); // "c"
