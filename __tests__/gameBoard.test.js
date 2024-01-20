const { gameBoard } = require('../gameBoard');

describe("gameBoard", () => {
    describe("markCell", () => {
        it("should return 'Cell is already filled' if the cell is already marked", () => {
            gameBoard.markCell('b', 1, 'O');
            const result = gameBoard.markCell('b', 1, 'x');
            expect(result).toBe('Cell is already filled');
        });
    });
});