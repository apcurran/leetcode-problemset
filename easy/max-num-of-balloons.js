"use strict";

/**
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed from the string.
 * 
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
    let balloonWordMap = new Map([
        ["b", 1],
        ["a", 1],
        ["l", 2],
        ["o", 2],
        ["n", 1],
    ]);

    let textMap = new Map();

    for (let char of text) {
        if (!textMap.has(char)) {
            // Add new char to map
            textMap.set(char, 1);
        } else {
            const prevVal = textMap.get(char);
            textMap.set(char, prevVal + 1);
        }
    }

    let valuesMap = new Map();

    for (let [balloonChar, balloonCharCount] of balloonWordMap) {
        // Divide text str char count by balloon map char count
        const textMapCharCount = textMap.get(balloonChar);
        const dividedResult = Math.floor(textMapCharCount / balloonCharCount);

        // If divided res is NaN, return early from func
        if (isNaN(dividedResult)) return 0;

        valuesMap.set(balloonChar, dividedResult);
    }

    // Take min val of valuesMap, since that is the limiting factor on how many "balloon" instances that can be made from the text string
    return Math.min(...valuesMap.values());
}

console.log( maxNumberOfBalloons("nlaebolko") ); // 1
console.log( maxNumberOfBalloons("leetcode") ); // 0
console.log( maxNumberOfBalloons("balon") ); // 0
console.log( maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw") ); // 10
