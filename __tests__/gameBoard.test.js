const { gameBoard } = require('../gameBoard');

describe("gameBoard", () => {
    beforeEach(() => {
        gameBoard.resetGrid();
    });
    
    describe("markCell", () => {
        it("should mark a cell with the specified marker", () => {
            gameBoard.markCell('a', 0, 'x');
            expect(gameBoard.getGrid()['a'][0]).toEqual('x');
        });

        it("should return 'Cell is already filled' if the cell is already marked", () => {
            gameBoard.markCell('b', 1, 'O');
            const result = gameBoard.markCell('b', 1, 'x');
            expect(result).toBe('Cell is already filled');
        });
    });
});