const { gameBoard } = require('../gameBoard');

describe('getGrid', () => {
    it('should reuturn the grid object', () => {
        const expected = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
        expect(gameBoard.getGrid()).toEqual(expected);
    });
});

describe('resetGrid', () => {
    beforeEach(() => {
        gameBoard.markCell(1, 1, 'x');
        gameBoard.markCell(0, 2, 'o');
    });
    it('should set each value in a grid to empty', () => {
        gameBoard.resetGrid();
        const result = gameBoard.getGrid().flat();
        result.forEach(cell => expect(cell).toBe(' '));
    });
});

describe('markCell', () => {
    beforeEach(() => {
        gameBoard.resetGrid();
    });
    it('should throw "Cell is out of bounds" if row or column is invalid', () => {
        const invalidRowInput = () => gameBoard.markCell(3, 1, 'x');
        const invalidColInput = () => gameBoard.markCell(0, 4, 'x');
        expect(invalidRowInput).toThrow('Cell is out of bounds');
        expect(invalidColInput).toThrow('Cell is out of bounds');
    });
    it('should throw "Cell is already filled" if the cell is already marked', () => {
        const markFilledCell = () => {
            gameBoard.markCell(1, 1, 'O');
            gameBoard.markCell(1, 1, 'x');
        }
        expect(markFilledCell).toThrow('Cell is already filled');
    });
    it('should mark a cell with the specified marker', () => {
        gameBoard.markCell(0, 0, 'x');
        gameBoard.markCell(1, 1, 'x');
        gameBoard.markCell(2, 2, 'x');
        expect(gameBoard.getGrid()[0][0]).toEqual('x');
        expect(gameBoard.getGrid()[1][1]).toEqual('x');
        expect(gameBoard.getGrid()[2][2]).toEqual('x');
    });
});

describe('checkForWinner', () => {
    beforeEach(() => {
        gameBoard.resetGrid();
    });
    it('should return false if no winner is found', () => {
        expect(gameBoard.checkForWinner('x')).toBe(false);
    });
    it('should return true if any row has been filled', () => {
        gameBoard.markCell(0, 0, 'x');
        gameBoard.markCell(0, 1, 'x');
        gameBoard.markCell(0, 2, 'x');
        expect(gameBoard.checkForWinner('x')).toBe(true);
    });
    it('should return true if any column has been filled', () => {
        gameBoard.markCell(0, 0, 'x');
        gameBoard.markCell(1, 0, 'x');
        gameBoard.markCell(2, 0, 'x');
        expect(gameBoard.checkForWinner('x')).toBe(true);
    });
    it('should return true if any diagonal has been filled', () => {
        gameBoard.markCell(0, 0, 'x');
        gameBoard.markCell(1, 1, 'x');
        gameBoard.markCell(2, 2, 'x');
        expect(gameBoard.checkForWinner('x')).toBe(true);
    });
});