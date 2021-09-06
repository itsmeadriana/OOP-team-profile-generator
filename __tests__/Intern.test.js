const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toMatch('Intern');
})