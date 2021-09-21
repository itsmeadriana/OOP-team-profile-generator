const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email){
    super(name, email)

       this.officeNumber = Math.floor(Math.random() * 400 + 5);
       this.role = 'Manager'
    }
}


module.exports = Manager;