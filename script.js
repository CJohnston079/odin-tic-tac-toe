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

    const clearAllCells = function () {
        Object.values(grid).forEach(row => row.fill(''));
    }

    const checkForWinner = function (marker) {
        return checkRows(marker) || checkColumns(marker) || checkDiagonals(marker);
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

    const checkDiagonals = function (marker) {
        const diagonals = [
            [grid['a'][0], grid['b'][1], grid['c'][2]],
            [grid['a'][2], grid['b'][1], grid['c'][0]]
        ]
        for (const diagonal of diagonals) {
            if (diagonal.every(cell => cell === marker)) {
                return true;
            }
        }
        return false;
    }

    return { markCell }
})();
