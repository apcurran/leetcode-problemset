// /**
//  * solution 1 -- string methods
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// function reversePrefix(s, k) {
//     const reversedChunk = s.slice(0, k).split("").reverse("").join("");
//     const remainingChunk = s.slice(k);

//     return reversedChunk + remainingChunk;
// }

/**
 * solution 2 -- for loop
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reversePrefix(s, k) {
    let reversedResult = "";

    for (let i = k - 1; i >= 0; i--) {
        reversedResult += s[i];
    }

    for (let i = k; i < s.length; i++) {
        reversedResult += s[i];
    }

    return reversedResult;
}

console.log(reversePrefix("abcd", 2)); // "bacd"
