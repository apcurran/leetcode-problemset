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

// /**
//  * solution 2 -- for loop
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {string} s
//  * @param {number} k
//  * @return {string}
//  */
// function reversePrefix(s, k) {
//     let reversedResult = "";

//     for (let i = k - 1; i >= 0; i--) {
//         reversedResult += s[i];
//     }

//     for (let i = k; i < s.length; i++) {
//         reversedResult += s[i];
//     }

//     return reversedResult;
// }

/**
 * solution 3 -- single while loop
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reversePrefix(s, k) {
    let splitStr = s.split("");
    let left = 0;
    let right = k - 1;

    while (left < right) {
        const tempLeft = splitStr[left];
        splitStr[left] = splitStr[right];
        splitStr[right] = tempLeft;
        // move pointers
        left++;
        right--;
    }

    return splitStr.join("");
}

console.log(reversePrefix("abcd", 2)); // "bacd"
