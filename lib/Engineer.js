const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email) {
        super(name, email)

        this.github = 'mygithub.github.com';
        this.role = 'Engineer';
    }
}

module.exports = Engineer;