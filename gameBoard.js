const gameBoard = (function () {
	const grid = [
		[" ", " ", " "],
		[" ", " ", " "],
		[" ", " ", " "],
	];

	const getGrid = () => grid;
	const resetGrid = () => grid.forEach(row => row.fill(" "));

	const markCell = function (row, column, marker) {
		if (!(row in grid) || column > grid[0].length) {
			throw "Cell is out of bounds";
		}
		if (grid[row][column] !== " ") {
			throw "Cell is already filled";
		}
		grid[row][column] = marker;
	};

	const checkForWinner = function (marker) {
		return checkRows(marker) || checkColumns(marker) || checkDiagonals(marker);
	};

	const checkRows = function (marker) {
		for (const row of grid) {
			if (row.every(cell => cell === marker)) {
				return true;
			}
		}
		return false;
	};

	const checkColumns = function (marker) {
		for (let i = 0; i < grid[0].length; i += 1) {
			if (grid.every(row => row[i] === marker)) {
				return true;
			}
		}
		return false;
	};

	const checkDiagonals = function (marker) {
		const diagonals = [
			[grid[0][0], grid[1][1], grid[2][2]],
			[grid[0][2], grid[1][1], grid[2][0]],
		];
		for (const diagonal of diagonals) {
			if (diagonal.every(cell => cell === marker)) {
				return true;
			}
		}
		return false;
	};

	return { getGrid, resetGrid, markCell, checkForWinner };
})();

module.exports = { gameBoard };
