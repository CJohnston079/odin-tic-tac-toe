const { player } = require('../player');

describe('player', () => {
    const testPlayer = player('Milo', 'x');

    it('should have name and marker properties', () => {
        expect(testPlayer).toHaveProperty('name');
        expect(testPlayer).toHaveProperty('marker');
    });
    it('should have name and marker values', () => {
        expect(testPlayer.name).toBe('Milo');
        expect(testPlayer.marker).toBe('x');
    });
    it('should have isHuman property which defaults to false', () => {
        expect(testPlayer.getIsHuman()).toBe(false);
    });
    it('should have getIsHuman method', () => {
        expect(testPlayer).toHaveProperty('getIsHuman');
        expect(typeof testPlayer.getIsHuman).toBe('function');
    });
})

describe('getIsHuman', () => {
    const testPlayer = player('Milo', 'x');

    it('should have getIsHuman method', () => {
        expect(testPlayer).toHaveProperty('getIsHuman');
        expect(typeof testPlayer.getIsHuman).toBe('function');
    });
    it('should return player.isHuman', () => {
        expect(testPlayer.getIsHuman()).toBe(false);
    })
});
