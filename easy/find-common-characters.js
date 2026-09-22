/**
 * solution 1 -- brute force
 * n = words length
 * m = word chars length
 * time: O(m * n * m)
 * space: O(n + m)
 *
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
    const firstWord = words[0];
    const restWords = words.slice(1);
    let results = [];

    for (let char of firstWord) {
        let matchCurrCharAll = true;

        for (let i = 0; i < restWords.length; i++) {
            const currentWord = restWords[i];

            if (currentWord.includes(char)) {
                restWords[i] = restWords[i].replace(char, "0");
            } else {
                // not a match
                matchCurrCharAll = false;

                break;
            }
        }

        if (matchCurrCharAll) {
            results.push(char);
        }
    }

    return results;
}

console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]
