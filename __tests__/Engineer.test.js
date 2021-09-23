const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('github');
    
    expect(engineer.github).toBe(engineer.github);    
    expect(engineer.role).toMatch('Engineer');
})