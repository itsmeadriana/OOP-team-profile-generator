const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('employee,', 'UTA');

    expect(intern.school).toBe(intern.school);
    expect(intern.role).toMatch('Intern');
})