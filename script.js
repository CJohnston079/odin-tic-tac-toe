// example IIFE
// 
// const caulculator = (function () {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { add, sub, mul, div };
//   })();

const gameBoard = (function () {
    const grid = {
        a: ['', '', ''],
        b: ['', '', ''],
        c: ['', '', '']
    };

    const markCell = function (row, column, marker) {
        if (grid[row][column] !== '') {
            return 'Cell is already filled';
        }
        grid[row][column] = marker;
    }

    const checkRows = function (marker) {
        for (const row in grid) {
            if (grid[row].every(cell => cell === marker)) {
                return true;
            }
        }
        return false;
    }

    const checkColumns = function (marker) {
        const columns = Object.keys(grid).map(row => Object.values(grid[row]));
        for (const col in columns) {
            if (columns[col].every(cell => cell === marker)) {
                return true;
            }
        }
        return false;
    }

    return { markCell }
})();
