"use strict";

/**
 * solution 1 -- Set obj
 * time: O(n * m) -- replace and split cause loops
 * space: O(n)
 *
 * @param {string[]} emails
 * @return {number}
 */
function numUniqueEmails(emails) {
    let uniqueEmailsSet = new Set();

    for (let email of emails) {
        const [localName, domain] = email.split("@");
        // remove "." char from localName portion
        // then, only take portion of localName before "+" char
        const updatedLocalName = localName.replace(/\./g, "").split("+")[0];
        const finalStr = updatedLocalName + "@" + domain;
        uniqueEmailsSet.add(finalStr);
    }

    return uniqueEmailsSet.size;
}

console.log(
    numUniqueEmails([
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com",
    ]),
); // 2

console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])); // 3

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"])); // 2
