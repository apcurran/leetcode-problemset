"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} date
 * @return {string}
 */
function convertDateToBinary(date) {
    const [year, month, day] = date.split("-");
    const yearBinStr = Number(year).toString(2);
    const monthBinStr = Number(month).toString(2);
    const dayBinStr = Number(day).toString(2);

    const yearBinStrNoLeadingZeros = removeLeadingZeros(yearBinStr);
    const monthBinStrNoLeadingZeros = removeLeadingZeros(monthBinStr);
    const dayBinStrNoLeadingZeros = removeLeadingZeros(dayBinStr);

    return `${yearBinStrNoLeadingZeros}-${monthBinStrNoLeadingZeros}-${dayBinStrNoLeadingZeros}`;
}

/**
 * @param {string} strNum 
 * @returns {string}
 */
function removeLeadingZeros(strNum) {
    let result = strNum;
    
    while (result[0] === "0" && result.length > 0) {
        result = result.slice(1);
    }

    return result;
}

console.log(convertDateToBinary("2080-02-29")); // "100000100000-10-11101"
