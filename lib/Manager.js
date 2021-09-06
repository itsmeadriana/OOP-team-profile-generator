class Manager {
    constructor(){
       this.officeNumber = Math.floor(Math.random() * 10 + 5);
       this.role = 'Manager'
    }
}


module.exports = Manager;