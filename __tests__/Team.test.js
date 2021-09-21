const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Team = require('../lib/Team');

test('creates a team object', () => {
    const team = new Team('Bertie Botts');
    const employee = new Manager('George', 'forge@gred.com');
    const employee2 = new Intern('Balloo', 'bll@gred.com');
    const employee3 = new Manager('Fred', 'frre@gred.com');
    const employee4 = new Engineer('Rowena', 'raven@gred.com');
    const employee5 = new Engineer('Petunia', 'petty@gred.com');
    const employee6 = new Intern('Colleen', 'cln@gred.com');

    team.addManager(employee);
    team.addIntern(employee2);
    team.addManager(employee3);
    team.addEngineer(employee4);
    team.addEngineer(employee5);
    team.addIntern(employee6);
    
    console.log(team);
})