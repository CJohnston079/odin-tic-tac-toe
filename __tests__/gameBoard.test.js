const { gameBoard } = require('../gameBoard');

describe("gameBoard", () => {
    beforeEach(() => {
        gameBoard.resetGrid();
    });
    
    describe("markCell", () => {
        it("should returns 'Cell is out of bounds' if row or column is invalid", () => {
            const invalidRowInput = gameBoard.markCell('d', 1, 'x');
            const invalidColInput = gameBoard.markCell('a', 4, 'x');
            expect(invalidRowInput).toBe('Cell is out of bounds');
            expect(invalidColInput).toBe('Cell is out of bounds');
        })
        it("should return 'Cell is already filled' if the cell is already marked", () => {
            gameBoard.markCell('b', 1, 'O');
            const result = gameBoard.markCell('b', 1, 'x');
            expect(result).toBe('Cell is already filled');
        });
        it("should mark a cell with the specified marker", () => {
            gameBoard.markCell('a', 0, 'x');
            expect(gameBoard.getGrid()['a'][0]).toEqual('x');
        });
    });
});