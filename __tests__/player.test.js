const { experiments } = require('webpack');
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
    it('should have a score property initialised to 0', () => {
        expect(testPlayer.getScore()).toBe(0);
    })
});

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

describe('getScore', () => {
    it('should have getScore method', () => {
        expect(testPlayer).toHaveProperty('getScore');
        expect(typeof testPlayer.getScore).toBe('function');
    });
    it('should return player.score', () => {
        expect(testPlayer.getScore()).toBe(0);
    });
});

describe('incrementScore', () => {
    afterEach(() => {
        testPlayer.resetScore()
    });
    it('should have incrementScore method', () => {
        expect(testPlayer).toHaveProperty('incrementScore');
        expect(typeof testPlayer.incrementScore).toBe('function');
    });
    it('should incremend player.score by 1 when invoked', () => {
        testPlayer.incrementScore();
        expect(testPlayer.getScore()).toBe(1);
    });
});

describe('resetScore', () => {
    beforeEach(() => {
        testPlayer.incrementScore()
    });
    it('should have resetScore method', () => {
        expect(testPlayer).toHaveProperty('resetScore');
        expect(typeof testPlayer.resetScore).toBe('function');
    });
    it('should reset player.score to 0 when invoked', () => {
        testPlayer.resetScore();
        expect(testPlayer.getScore()).toBe(0);
    })
})