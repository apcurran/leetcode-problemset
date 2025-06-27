"use strict";

/**
 * solution 1 -- hashset
 * time: O(n * l^2)
 * space: O(n + l)
 * 
 * @param {string[]} folders
 * @return {string[]}
 */
function removeSubfolders(folders) {
    let folderSet = new Set(folders);
    let results = [];

    for (let folder of folders) {
        results.push(folder);

        for (let i = 0; i < folder.length; i++) {
            if (folder[i] === "/" && folderSet.has(folder.slice(0, i))) {
                results.pop();

                break;
            }
        }
    }

    return results;
}

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
// ["/a","/c/d","/c/f"]
