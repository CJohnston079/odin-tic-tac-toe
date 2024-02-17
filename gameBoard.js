const gameBoard = (function () {
    const grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getGrid = () => grid;
    const resetGrid = () => Object.values(grid).forEach(row => row.fill(''));

    const markCell = function (row, column, marker) {
        if (!(row in grid) || column > grid[0].length) {
            throw 'Cell is out of bounds';
        }
        if (grid[row][column] !== '') {
            throw 'Cell is already filled';
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
        for (let i = 0; i < grid['a'].length; i += 1) {
            if (['a', 'b', 'c'].every(row => grid[row][i] === marker)) {
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
        for (const diagonal in diagonals) {
            if (diagonals[diagonal].every(cell => cell === marker)) {
                return true;
            }
        }
        return false;
    }

    return { getGrid, resetGrid, markCell, checkForWinner };
})();

module.exports = { gameBoard };