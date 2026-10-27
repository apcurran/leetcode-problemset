/**
 * solution 1
 * time: O(r * c)
 * space: O(c) -- not including required results 2D array
 *
 * @param {number} r
 * @param {number} c
 * @return {string[]}
 */
function createGrid(r, c) {
    // go all the way right on the first row
    const firstRow = ".".repeat(c);
    let grid = [firstRow]; // seed with first row

    // then, go vertically down on final column
    for (let i = 1; i < r; i++) {
        const row = "#".repeat(c - 1) + "."; // ex row "#####."
        grid.push(row);
    }

    return grid;
}

console.log(createGrid(2, 3)); // ["..#","#.."]
