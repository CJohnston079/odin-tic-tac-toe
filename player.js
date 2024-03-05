const player = function ({ name = "player", marker }) {
	let isHuman = false;
	let score = 0;

	const getIsHuman = () => isHuman;
	const toggleIsHuman = () => (isHuman = !isHuman);

	const getScore = () => score;
	const incrementScore = () => (score += 1);
	const resetScore = () => (score = 0);

	return {
		name,
		marker,
		getIsHuman,
		toggleIsHuman,
		getScore,
		incrementScore,
		resetScore,
	};
};

export default player;
