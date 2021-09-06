class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = Math.floor(Math.random() * 39)
        this.email = email;
    }
}

function getName() {
    return `${this.name}`;
}

function getId() {
    return this.id;
}

function getEmail() {
    return this.email;
}