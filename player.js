const player = function (name, marker) {
    let isHuman = false;

    const getIsHuman = () => isHuman;
    const toggleIsHuman = () => isHuman = !isHuman;

    return { name, marker, getIsHuman, toggleIsHuman };
};

module.exports = { player };