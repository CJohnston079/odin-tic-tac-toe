const gameBoard = (function () {
    const grid = {
        a: ['', '', ''],
        b: ['', '', ''],
        c: ['', '', '']
    };

    const getGrid = () => grid;
    const resetGrid = () => Object.values(grid).forEach(row => row.fill(''));

    const markCell = function (row, column, marker) {
        if (grid[row][column] !== '') {
            return 'Cell is already filled';
        }
        grid[row][column] = marker;
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

    return { getGrid, resetGrid, markCell }
})();

module.exports = { gameBoard };