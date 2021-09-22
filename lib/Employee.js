class Employee {
    constructor(name, email) {
        console.log(name)
        this.name = name;
        this.id = Math.floor(Math.random() * 36882379);
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;