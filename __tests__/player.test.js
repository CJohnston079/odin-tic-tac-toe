const { player } = require('../player');

const testPlayer = player('Milo', 'x');

describe('player', () => {
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
    it('should have toggleIsHuman method', () => {
        expect(testPlayer).toHaveProperty('toggleIsHuman');
        expect(typeof testPlayer.toggleIsHuman).toBe('function');
    });
})

describe('getIsHuman', () => {
    it('should have getIsHuman method', () => {
        expect(testPlayer).toHaveProperty('getIsHuman');
        expect(typeof testPlayer.getIsHuman).toBe('function');
    });
    it('should return player.isHuman', () => {
        expect(testPlayer.getIsHuman()).toBe(false);
    })
});

describe('toggleIsHuman', () => {
    it('should have toggleIsHuman method', () => {
        expect(testPlayer).toHaveProperty('getIsHuman');
        expect(typeof testPlayer.toggleIsHuman).toBe('function');
    });
    it('should toggle player.isHuman between true and false', () => {
        testPlayer.toggleIsHuman();
        expect(testPlayer.getIsHuman()).toBe(true);
        testPlayer.toggleIsHuman();
        expect(testPlayer.getIsHuman()).toBe(false);
    });
});
