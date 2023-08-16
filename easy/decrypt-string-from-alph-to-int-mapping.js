"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str
 * @return {string}
 */
function freqAlphabets(str) {
    const charMapping = new Map([
        ["1", "a"],    
        ["2", "b"],    
        ["3", "c"],    
        ["4", "d"],    
        ["5", "e"],    
        ["6", "f"],    
        ["7", "g"],    
        ["8", "h"],    
        ["9", "i"],    
        ["10", "j"],    
        ["11", "k"],    
        ["12", "l"],    
        ["13", "m"],    
        ["14", "n"],    
        ["15", "o"],    
        ["16", "p"],    
        ["17", "q"],    
        ["18", "r"],    
        ["19", "s"],    
        ["20", "t"],    
        ["21", "u"],    
        ["22", "v"],    
        ["23", "w"],    
        ["24", "x"],    
        ["25", "y"],    
        ["26", "z"],    
    ]);
    let results = [];
    // iterate str backwards
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];

        if (char === "#") {
            // if "#", then check two next nums for "numnum#"
            const chunk = str[i - 2] + str[i - 1];
            const chunkToLetter = charMapping.get(chunk);
            results.push(chunkToLetter);
            // move i pointer
            i -= 2;
        } else {
            // else, get character from 1-9 to a-i
            const chunkToLetter = charMapping.get(char);
            results.push(chunkToLetter);
        }
    }

    return results.reverse().join("");
}

console.log(freqAlphabets("10#11#12")); // "jkab"
