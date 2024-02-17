const { gameBoard } = require('../gameBoard');

describe.only('getGrid', () => {
    it('should reuturn the grid object', () => {
        const expected = [['', '', ''], ['', '', ''], ['', '', '']];
        expect(gameBoard.getGrid()).toEqual(expected);
    });
});

describe('resetGrid', () => {
    beforeEach(() => {
        gameBoard.markCell('b', 1, 'x');
        gameBoard.markCell('a', 2, 'o');
    });
    it('should set each value in a grid to empty', () => {
        gameBoard.resetGrid();
        const result = Object.values(gameBoard.getGrid()).flat();
        result.forEach(cell => expect(cell).toBe(''));
    })
});

describe('markCell', () => {
    beforeEach(() => {
        gameBoard.resetGrid();
    });
    it('should throw "Cell is out of bounds" if row or column is invalid', () => {
        const invalidRowInput = () => gameBoard.markCell('d', 1, 'x');
        const invalidColInput = () => gameBoard.markCell('a', 4, 'x');
        expect(invalidRowInput).toThrow('Cell is out of bounds');
        expect(invalidColInput).toThrow('Cell is out of bounds');
    })
    it('should throw "Cell is already filled" if the cell is already marked', () => {
        const markFilledCell = () => {
            gameBoard.markCell('b', 1, 'O');
            gameBoard.markCell('b', 1, 'x');
        }
        expect(markFilledCell).toThrow('Cell is already filled');
    });
    it('should mark a cell with the specified marker', () => {
        gameBoard.markCell('a', 0, 'x');
        gameBoard.markCell('b', 1, 'x');
        gameBoard.markCell('c', 2, 'x');
        expect(gameBoard.getGrid()['a'][0]).toEqual('x');
        expect(gameBoard.getGrid()['b'][1]).toEqual('x');
        expect(gameBoard.getGrid()['c'][2]).toEqual('x');
    });
});

describe('checkForWinner', () => {
    beforeEach(() => {
        gameBoard.resetGrid();
    })
    it('should return false if no winner is found', () => {
        expect(gameBoard.checkForWinner('x')).toBe(false);
    });
    it('should return true if any row has been filled', () => {
        gameBoard.markCell('a', 0, 'x');
        gameBoard.markCell('a', 1, 'x');
        gameBoard.markCell('a', 2, 'x');
        expect(gameBoard.checkForWinner('x')).toBe(true);
    });
    it('should return true if any column has been filled', () => {
        gameBoard.markCell('a', 0, 'x');
        gameBoard.markCell('b', 0, 'x');
        gameBoard.markCell('c', 0, 'x');
        expect(gameBoard.checkForWinner('x')).toBe(true);
    });
    it('should return true if any diagonal has been filled', () => {
        gameBoard.markCell('a', 0, 'x');
        gameBoard.markCell('b', 1, 'x');
        gameBoard.markCell('c', 2, 'x');
        expect(gameBoard.checkForWinner('x')).toBe(true);
    });
});