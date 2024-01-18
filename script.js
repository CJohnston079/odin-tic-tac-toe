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

        return grid;
    }

    return { markCell }
})();
