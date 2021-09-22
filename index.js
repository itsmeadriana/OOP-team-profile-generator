const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/template.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Team = require('./lib/Team.js');

const promptTeamName = () => {
    console.log("Let's build a new team site!")
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: "What is your team's name?",
            validate: teamName => {
                if (teamName) {
                    return true;
                } else {
                    console.log('The generic "My Team" it is, then.');
                }
            }
        }
    ])
        .then(({ teamName }) => {
            this.team = new Team(teamName);
            addEmployee();
        })
};

const addEmployee = (teamName) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your employee's name.",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Your employee needs a name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your employee's email address.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Your employee needs an email address");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please select the employee's role from the following list:",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: role => {
                if (role) {
                    return true;
                } else {
                    console.log("Your employee needs a role.");
                    return false;
                }
            }
        }
    ])
    .then(({ name, email, role }) => {
        console.log(name)
        if (role === "Manager") {
            const myManager = new Manager(name, email);
            this.team.addManager(myManager)
            addNewEmployee();
        } 
        else if (role === "Engineer") {
            generateEngineer(name, email);
        }
        else if (role === "Intern") {
            generateIntern(name, email);
        }
    })
};

const generateEngineer = (name, email) => {
    return inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: "Please enter this engineer's GitHub username.",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("This engineer needs a GitHub username.")
                        return false;
                    }
                }
            })
            .then(({ github }) => {
                const newEngineer = new Engineer(name, email, github);
                this.team.addEngineer(newEngineer);
                addNewEmployee();
            })
}

const generateIntern = (name, email) => {
    return inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "Please enter this intern's school name.",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log('This intern needs a school name.')
                        return false;
                    }
                }
            })
            .then(({ school }) => {
                const newIntern = new Intern(name, email, school);
                this.team.addIntern(newIntern);
                addNewEmployee();
            })
}

const addNewEmployee = () => {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'addNewEmployee',
            message: 'Would you like to add another employee to your team?',
            default: false
        })
        .then((userAnswer) => {
            console.log(userAnswer)
            if (userAnswer.addNewEmployee === true) {
                return addEmployee();
            } else {
                console.log(this.team)
                writeToFile();
            }
        })
}

const writeToFile = (profileData) => {
    const pageHTML = generateTeam(profileData);

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Page created! Check out index.html in this directory to see your Team Profile!');
        });

}

// promptTeamName()
    // .then(writeToFile())

promptTeamName()
    .then((assembledTeam) => {
        
    });