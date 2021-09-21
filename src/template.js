const Team = require('../lib/Team.js');
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager");

const generateTeam = (input) => {
    console.log(input);
    return generateTeamName(input.teamName) +
        generateEmployee(input.name, input.id, input.email) +
        generateManager(input.role, input.officeNumber) +
        generateEngineer(input.role, input.github) +
        generateIntern(input.role, input.school)
};

// const employeeArray = ([
//     (Manager = {
//         name: 'employeeName',
//         id: 'id',
//         role: 'role',
//         email: 'email',
//         officeNumber: 'officeNumber'
//     }),
//     (Engineer = {
//         name: 'employeeName',
//         id: 'id',
//         role: 'role',
//         email: 'email',
//         github: 'github'
//     }),
//     (Intern = {
//         name: 'employeeName',
//         id: 'id',
//         role: 'role',
//         email: 'email',
//         school: 'school'
//     })
// ])

Team.prototype.generateTeam = function(teamName) {
    if (this.teamName != undefined) {
        return `
        <header class="" id="header">
        <h1 class="">${teamName}</h1>
      </header>
        `
    } else {
        return `
        <section class="" id="header">
        <h1 class="">My Team</h1>
      </section>`
    }
};

const generateTeamName = teamName => {
    if (teamName != undefined) {
        return `
        <header class="" id="header">
        <h1 class="">${teamName}</h1>
      </header>
        `
    } else {
        return `
        <section class="" id="header">
        <h1 class="">My Team</h1>
      </section>`
    }
};

const generateManager = () => {
    return `${Manager}`
        .map(({ name, role, id, email, officeNumber }) => {
            return `
    <section class="card" id="${id}">
        <div class="card-header">
            <h2>
                ${name}
            </h2>
            <article class="role-section">
                <h3> ${role}
                </h3>
                <img src="assets/images/manager"/>
            </article>
            <article class="card-body">
                <div class="idNumber">
                    ${id}
                </div>
                <div class="officeNumber">
                    ${officeNumber}
                </div>
                <div class="email">
                    <a href="${email}">
                        ${email}
                    </a>
                </div>
            </article>
        </div>
    </section>
    `
        })
}

const generateEngineer = () => {
    return `${Engineer}`
        .map(({ name, role, id, email, github }) => {
            return `
    <section class="card" id="${id}">
        <div class="card-header">
            <h2>
                ${name}
            </h2>
            <article class="role-section">
                <h3> ${role}
                </h3>
                <img src="assets/images/engineer"/>
            </article>
            <article class="card-body">
                <div class="idNumber">
                    ${id}
                </div>
                <div class="email">
                    <a href="${email}">
                        ${email}
                    </a>
                </div>
                <div class="github">
                    <a href="${github}">
                        ${github}
                    </a>
                </div>
            </article>
        </div>
    </section>
    `
        })
};

const generateIntern = () => {
    return `
        ${Intern}`
        .map(({ name, id, role, email, school }) => {
            return `
            <section class="card" id="${id}">
                <div class="card-header">
                    <h2>
                        ${name}
                    </h2>
                    <article class="role-section">
                        <h3> ${role}
                        </h3>
                        <img src="assets/images/intern" />
                    </article>
                    <article class="card-body">
                        <div class="idNumber">
                            ${id}
                        </div>
                        <div class="school">
                            ${school}
                        </div>
                        <div class="email">
                            <a href="${email}">
                                ${email}
                            </a>
                        </div>
                        <div class="school">
                            ${school}
                        </div>
                    </article>
                </div>
            </section>
            `
    })
}

    module.exports = generateTeam
