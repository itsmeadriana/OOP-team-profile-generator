const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email) {
        super(name, email)

        this.school = school;
        this.role = 'Intern';
    }
};

module.exports = Intern;