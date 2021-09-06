const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('github', 'role');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toMatch('Engineer');
})