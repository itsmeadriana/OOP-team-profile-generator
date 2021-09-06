const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toMatch('Manager');
})