const { player } = require('../player');

describe("player", () => {
    const testPlayer = player('Milo', 'x');

    test('Player has name and marker properties', () => {
        expect(testPlayer).toHaveProperty('name');
        expect(testPlayer).toHaveProperty('marker');
    });
    test('Player has correct name and marker values', () => {
        expect(testPlayer.name).toBe('Milo');
        expect(testPlayer.marker).toBe('x');
    });
})